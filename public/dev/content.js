// context-script.js

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
      if (!arr.length) {
        response({
          pageData: "",
          status: "failure",
          error: "Oop's..!! Unable to fetch data. Try it on some other day.",
        });
      } else {
        response({
          pageData: arr.join("\n\n").trim(),
          status: "success",
          error: "",
        });
      }
    }
  });
};
