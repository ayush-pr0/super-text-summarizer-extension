import { logo } from "../assets";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        {onlineStatus ? (
          <label className="green_label">Online</label>
        ) : (
          <label className="red_label">Offline</label>
        )}
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">SuperText {name}</span>
      </h1>
      <h2 className="desc">
        Transforming Lengthy Articles into Clear and Concise Summaries -
        Simplify Your Reading, One Article at a Time
      </h2>
    </header>
  );
};

export default Header;
