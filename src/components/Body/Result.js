import { useContext } from "react";
import { copy, loader, tick } from "../../assets";
import superContext from "../../utils/superContext";
import Summary from "./Summary";
import Highlights from "./Highlights";

const Result = () => {
  const { article, isLoding, error, copied, handleCopy } =
    useContext(superContext);
  return (
    <div className="my-10 max-w-full flex justify-center items-center">
      {isLoding ? (
        <img src={loader} alt="loader" className="w-10 h-10 object-contain" />
      ) : error ? (
        <p className="font-inter font-bold text-black text-center">
          Well, that wasn't supposed to happen...
          <br />
          <span className="font-satoshi font-normal text-gray-700">
            {error}
          </span>
        </p>
      ) : (
        article?.result && (
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">{article.type}</span>
              </h2>
              <div
                className="copy_btn"
                onClick={() => handleCopy(article.result, article.type)}
              >
                <img
                  src={
                    copied.url == article.result && copied.type == article.type
                      ? tick
                      : copy
                  }
                  alt={
                    copied == article.result && copied.type == article.type
                      ? "tick_icon"
                      : "copy_icon"
                  }
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
            </div>
            <div className="result_box">
              {article.type == "Summary" ? <Summary /> : <Highlights />}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Result;
