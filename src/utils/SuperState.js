import { useState } from "react";
import SuperContext from "./superContext";

const SuperState = ({ children }) => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [type, setType] = useState("Summary");
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <SuperContext.Provider
      value={{
        article,
        setArticle,
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
