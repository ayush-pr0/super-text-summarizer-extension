import { useContext } from "react";
import { copy, loader, tick } from "../../assets";
import superContext from "../../utils/superContext";

const Summary = () => {
  const { article, isLoding, error, copied, handleCopy } =
    useContext(superContext);
  return (
    <div className="my-10 max-w-full flex justify-center items-center">
      {isLoding ? (
        <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
      ) : error ? (
        <p className="font-inter font-bold text-black text-center">
          Well, that wasn't supposed to happen...
          <br />
          <span className="font-satoshi font-normal text-gray-700">
            {error}
          </span>
        </p>
      ) : (
        article?.summary && (
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">{article.type}</span>
              </h2>
              <div
                className="copy_btn"
                onClick={() => handleCopy(article.summary)}
              >
                <img
                  src={copied === article.summary ? tick : copy}
                  alt={copied === article.summary ? "tick_icon" : "copy_icon"}
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
            </div>
            <div className="summary_box">
              {article.summary.split("\n\n").map((para, id) => (
                <p
                  key={id}
                  className="font-inter font-medium text-sm text-gray-700 mb-2"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Summary;
