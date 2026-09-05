import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { DOCUMENT_HEAD } from "./index.js";
import "./styles/index.css";

// Inject the document head defined in index.js into the real document.
// This keeps the actual HTML markup centralized in index.js instead of
// scattered inside a static index.html file.
document.head.insertAdjacentHTML("beforeend", DOCUMENT_HEAD);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
