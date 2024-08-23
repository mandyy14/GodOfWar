import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GodOfWar from "./Pages/GodOfWar";
import "../index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GodOfWar />
  </StrictMode>
);
