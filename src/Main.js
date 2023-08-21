import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import SuperState from "./utils/SuperState.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SuperState>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <App />
      </main>
    </SuperState>
  </React.StrictMode>
);
