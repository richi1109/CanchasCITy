import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ReservaCanchasCIT from "./ReservaCanchasCIT";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/CanchasCITy">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reservas" element={<ReservaCanchasCIT />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);