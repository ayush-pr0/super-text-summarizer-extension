import { useContext } from "react";
import { copy, tick } from "../../assets";
import superContext from "../../utils/superContext";

const History = () => {
  const { setArticle, allArticles, copied, handleCopy } =
    useContext(superContext);
  return (
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
      {allArticles.reverse().map((article, index) => (
        <div key={`link-${index}`} className="link_card">
          <p
            className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate"
            onClick={() => setArticle(article)}
          >
            {article.url}
          </p>
          <div className="copy_btn" onClick={() => handleCopy(article.url)}>
            <img
              src={copied == article.url ? tick : copy}
              alt={copied == article.url ? "tick_icon" : "copy_icon"}
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
