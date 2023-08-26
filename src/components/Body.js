import React, { useContext, useEffect } from "react";
import InputForm from "./Body/InputForm";
import History from "./Body/History";
import Result from "./Body/Result";
import superContext from "../utils/superContext";
import useWebPage from "../utils/useWebPage";

const Body = () => {
  const { setAllArticles } = useContext(superContext);
  const { checkChangeInData, getActiveTabData } = useWebPage();

  async function loadWebPageData() {
    const dataChanged = await checkChangeInData();
    if (dataChanged == false) getActiveTabData();
  }

  useEffect(() => {
    loadWebPageData();

    // Load data from localStorage on mount
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

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
