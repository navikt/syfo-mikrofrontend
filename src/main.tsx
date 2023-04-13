import React from "react";
import { createRoot } from "react-dom/client";
import Mikrofrontend from "./Mikrofrontend";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

root.render(
  <React.StrictMode>
    <main>
      <Mikrofrontend />
    </main>
  </React.StrictMode>
);
