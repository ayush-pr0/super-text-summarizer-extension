import { useState } from "react";
import SuperContext from "./superContext";

const SuperState = ({ children }) => {
  const [article, setArticle] = useState({
    url: "",
    result: "",
    type: "Summary",
  });
  const [pageData, setPageData] = useState("");
  const [type, setType] = useState("Summary");
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState({
    url: "",
    type: "",
  });

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl, type) => {
    setCopied({ url: copyUrl, type });
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <SuperContext.Provider
      value={{
        article,
        setArticle,
        pageData,
        setPageData,
        type,
        setType,
        isLoding,
        setIsLoding,
        error,
        setError,
        allArticles,
        setAllArticles,
        copied,
        setCopied,
        handleCopy,
      }}
    >
      {children}
    </SuperContext.Provider>
  );
};

export default SuperState;
