import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
