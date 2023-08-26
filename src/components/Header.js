import { useContext } from "react";
import { logo } from "../assets";
import useOnlineStatus from "../utils/useOnlineStatus";
import superContext from "../utils/superContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { setArticle, setAllArticles, setError } = useContext(superContext);
  return (
    <header className="header">
      <nav className="nav">
        <img
          src={logo}
          alt="sumz_logo"
          className="w-28 max-[450px]:w-16 object-contain"
        />

        {onlineStatus ? (
          <label className="green_label">Online</label>
        ) : (
          <label className="red_label">Offline</label>
        )}

        <div>
          <button
            className="clear_btn"
            onClick={() => {
              setArticle({ url: "", result: "", type: "Summary" });
              setError("");
            }}
          >
            ❌ Data
          </button>
          <button
            className="clear_btn"
            onClick={() => {
              setAllArticles([]);
              localStorage.removeItem("articles");
            }}
          >
            ❌ History
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        <span className="orange_gradient ">SuperText</span>
        <br />
        Summarizer
      </h1>
    </header>
  );
};

export default Header;
