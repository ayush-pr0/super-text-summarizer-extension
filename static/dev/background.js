// background-script.js

const restricted_url_list = [
  "http://localhost",
  "https://localhost",
  "http://127.0.0.1",
  "https://www.google.com/",
  "https://yandex.com/",
  "https://web.whatsapp.com/",
  "https://www.bing.com/",
  "https://www.yahoo.com/",
  "https://www.dzen.ru/",
  "https://www.duckduckgo.com/",
  "https://www.ask.com/",
  "https://www.aol.com/",
  "https://www.archive.com/",
];

chrome.tabs.onActivated.addListener(async function ({ tabId }) {
  await chrome.storage.local.set({ currentTabId: tabId });
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete" && tab.active && tab.url) {
    let response = {
      pageData: "",
      status: "unknown",
      error: "Oop's..!! Unknown page found.",
    };
    if (restricted_url_list.find((url) => tab.url.includes(url))) {
      response = {
        pageData: "",
        status: "failure",
        error: "Oop's..!! Restricted page found.",
      };
    } else if (tab.url.includes("http://") || tab.url.includes("https://")) {
      response = await chrome.tabs.sendMessage(tabId, {
        type: "GET_DATA",
      });
    }

    await chrome.storage.local.set({ dataFetchTabId: tabId });
    await chrome.storage.local.set({
      tabURL: response.status == "success" ? tab.url : "",
    });
    await chrome.storage.local.set({ pageData: response.pageData });
    await chrome.storage.local.set({ error: response.error });
  }
});
