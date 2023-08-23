import React, { useContext, useEffect } from "react";
import InputForm from "./Body/InputForm";
import History from "./Body/History";
import Result from "./Body/Result";
import superContext from "../utils/superContext";

const Body = () => {
  const { setAllArticles, setArticle } = useContext(superContext);

  // Load data from localStorage on mount
  useEffect(() => {
    getActiveTabURL();

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
