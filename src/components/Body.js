import React, { useContext, useEffect } from "react";
import InputForm from "./Body/InputForm";
import History from "./Body/History";
import Summary from "./Body/Summary";
import superContext from "../utils/superContext";

const Body = () => {
  const { setAllArticles } = useContext(superContext);

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <InputForm />
        <History />
      </div>
      <Summary />
    </section>
  );
};

export default Body;
