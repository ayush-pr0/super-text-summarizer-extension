import { useContext } from "react";
import { linkIcon, logo } from "../../assets";
import superContext from "../../utils/superContext";
require("dotenv").config();

const InputForm = () => {
  const {
    article,
    setArticle,
    type,
    setType,
    isLoding,
    setIsLoding,
    setError,
    allArticles,
    setAllArticles,
  } = useContext(superContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (article.url.length == 0 || article.url == "unknown/url") {
      setError(
        "Oop's..!! Url field is empty or unknown url found. Please re-click on the SuperText extension"
      );
      return;
    }
    const existingArticle = allArticles.find(
      (item) => item.url == article.url && item.type == type
    );

    if (existingArticle) return setArticle(existingArticle);
    setIsLoding(true);
    setError("");
    const len = type == "Summary" ? 3 : 1;

    const requestUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${article.url}&length=${len}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.ARTICLE_SUMMARIZER_API,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(requestUrl, options);
      if (response.status === 404) {
        throw Error("Page not found");
      } else if (response.status === 500) {
        throw Error("Server error");
      } else if (!response.ok) {
        throw Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data?.summary) {
        if (type == "Highlights") {
          data.summary = data.summary.split(".").join(".\n\n");
        }
        const newArticle = {
          url: article.url,
          result: data.summary,
          type,
        };
        const updatedAllArticles = [newArticle, ...allArticles];
        // update state and local storage
        setArticle(newArticle);
        setAllArticles(updatedAllArticles);
        localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoding(false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex justify-center items-center">
        <img
          src={linkIcon}
          alt="link-icon"
          className="absolute left-0 my-2 ml-3 w-5"
        />

        <input
          type="url"
          placeholder="WebPage link"
          value={article.url}
          onChange={(e) => setArticle({ url: e.target.value })}
          onKeyDown={handleKeyDown}
          required
          className="url_input peer"
          disabled={true}
        />

        <button type="submit" className="submit_btn" disabled={isLoding}>
          <i className="fa-brands fa-searchengin rounded-2xl"></i>
        </button>
      </div>

      <div className="flex justify-between">
        <input
          key={"summary"}
          type="radio"
          id="summary"
          name="superTextType"
          value="Summary"
          onClick={(e) => setType(e.target.value)}
          defaultChecked
        />
        <label className="radioTypeLabel" htmlFor="summary">
          Summary
        </label>

        <input
          key={"highlights"}
          type="radio"
          id="highlights"
          name="superTextType"
          value="Highlights"
          onClick={(e) => setType(e.target.value)}
        />
        <label className="radioTypeLabel" htmlFor="highlights">
          Highlights
        </label>
      </div>
    </form>
  );
};

export default InputForm;
