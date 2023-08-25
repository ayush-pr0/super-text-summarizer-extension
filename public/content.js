// (() => {
// document.addEventListener("load", function () {

// });

// })();

window.onload = (event) => {
  chrome.runtime.onMessage.addListener(({ type }, sender, response) => {
    if (type === "GET_DATA") {
      let arr = [];
      document.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach((e) => {
        if (
          e.parentNode.tagName != "A" &&
          e.innerText.toString().split(" ").length > 4
        )
          arr.push(e.innerText);
      });
      response({ pageData: arr.join("\n\n").trim() });
    }
  });
};
