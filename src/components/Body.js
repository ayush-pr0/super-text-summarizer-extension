import React, { useContext, useEffect } from "react";
import InputForm from "./Body/InputForm";
import History from "./Body/History";
import Result from "./Body/Result";
import superContext from "../utils/superContext";

const Body = () => {
  const { setAllArticles, setArticle, pageData, setPageData } =
    useContext(superContext);

  // Load data from localStorage on mount
  useEffect(() => {
    getActiveTabURL();
    getActiveTabData();

    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
      currentWindow: true,
      active: true,
    });

    setArticle({
      url:
        tabs[0].url.includes("http://") || tabs[0].url.includes("https://")
          ? tabs[0].url
          : "unknown/url",
    });
  }

  function getActiveTabData() {
    console.log("getActiveTabData() called");
    chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
      if (changeInfo.status == "complete" && tab.active) {
        const response = chrome.tabs.sendMessage(tabId, {
          type: "GET_DATA",
        });
        const result = await response;

        console.log(tab.url);
        console.log(result.message);
        setPageData(result.message);
      }
    });
  }

  return (
    <section className="max-[450px]:mt-6 mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <InputForm />
        <History />
      </div>
      <Result />
    </section>
  );
};

export default Body;
