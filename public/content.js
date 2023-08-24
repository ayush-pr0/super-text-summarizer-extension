(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;

    if (type === "GET_DATA") {
      let arr = [];
      document.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach((e) => {
        if (
          e.parentNode.tagName != "A" &&
          e.innerText.toString().split(" ").length > 4
        )
          arr.push(e.innerText);
        console.log(arr.join("\n\n").trim());
      });
      response({ message: arr.join("\n\n").trim() });
    }
  });
})();
