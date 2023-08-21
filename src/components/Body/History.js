import { useContext } from "react";
import { copy, tick } from "../../assets";
import superContext from "../../utils/superContext";

const History = () => {
  const { setArticle, allArticles, type, setType, copied, handleCopy } =
    useContext(superContext);
  return (
    <div className="flex flex-col gap-1 max-h-56 overflow-y-auto">
      {allArticles.reverse().map((article, index) => (
        <div key={`${index}`} className="link_card">
          <p className="articleType">{article.type}</p>
          <p
            className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate cursor-pointer"
            onClick={() => setArticle(article)}
          >
            {article.url}
          </p>
          <div
            className="copy_btn"
            onClick={() => handleCopy(article.url, article.type)}
          >
            <img
              src={
                copied.url == article.url && copied.type == article.type
                  ? tick
                  : copy
              }
              alt={
                copied == article.url && copied.type == article.type
                  ? "tick_icon"
                  : "copy_icon"
              }
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
