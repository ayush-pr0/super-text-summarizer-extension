// background-script.js

const url_list = [
  "https://www.google.com/",
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
  if (
    changeInfo.status == "complete" &&
    tab.active &&
    tab.url &&
    tab.url.includes("https://") &&
    !url_list.find((url) => tab.url.includes(url))
  ) {
    const response = chrome.tabs.sendMessage(tabId, {
      type: "GET_DATA",
    });

    const data = await response;

    await chrome.storage.local.set({ tabURL: tab.url });
    await chrome.storage.local.set({ pageData: data.pageData });
    await chrome.storage.local.set({ dataFetchTabId: tabId });
  }
});
