import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/app.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
