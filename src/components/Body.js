import React, { useContext, useEffect } from "react";
import InputForm from "./Body/InputForm";
import History from "./Body/History";
import Result from "./Body/Result";
import superContext from "../utils/superContext";

const Body = () => {
  const { setAllArticles, setArticle, setPageData, setError } =
    useContext(superContext);

  // Load data from localStorage on mount
  useEffect(() => {
    checkChangeInData();
    getActiveTabURL();
    getActiveTabData();

    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  async function checkChangeInData() {
    const { dataFetchTabId } = await chrome.storage.local.get([
      "dataFetchTabId",
    ]);
    const { currentTabId } = await chrome.storage.local.get(["currentTabId"]);
    if (currentTabId != dataFetchTabId) {
      setArticle({
        url: "Unknown URL!! Reload Page",
      });
      setError(
        "Data is not loaded or has changed due to tab switching. Please re-click on the extension again after the page loads or reload the page."
      );
      return;
    }
  }

  async function getActiveTabURL() {
    const { tabURL } = await chrome.storage.local.get(["tabURL"]);
    setArticle({
      url:
        tabURL.includes("http://") || tabURL.includes("https://")
          ? tabURL
          : "unknown/url",
    });
  }

  async function getActiveTabData() {
    const { pageData } = await chrome.storage.local.get(["pageData"]);
    setPageData(pageData);
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
