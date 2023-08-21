import { useContext } from "react";
import superContext from "../../utils/superContext";

const Highlights = () => {
  const { article } = useContext(superContext);
  return (
    <ul>
      {article.result
        .split("\n\n")
        .filter(Boolean)
        .map((sentence, id) => (
          <li
            key={id}
            className="list-disc font-inter font-medium text-sm text-gray-700 mb-2"
          >
            {sentence}
          </li>
        ))}
    </ul>
  );
};

export default Highlights;
