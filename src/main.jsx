import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import "./index.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

const pageMap = {
  "/": <App />,
  "/privacy-policy": <PrivacyPolicy />,
  "/terms-and-conditions": <TermsConditions />
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {pageMap[pathname] ?? <App />}
  </React.StrictMode>
);
