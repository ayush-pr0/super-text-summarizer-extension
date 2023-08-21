import { useContext } from "react";
import superContext from "../../utils/superContext";

const Summary = () => {
  const { article } = useContext(superContext);
  return (
    <>
      {article.result.split("\n\n").map((para, id) => (
        <p
          key={id}
          className="font-inter font-medium text-sm text-gray-700 mb-2"
        >
          {para}
        </p>
      ))}
    </>
  );
};

export default Summary;
