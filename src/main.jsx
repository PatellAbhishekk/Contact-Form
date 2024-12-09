import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const appEl = document.querySelector("#App");
const root = createRoot(appEl);
root.render(
  <React.StrictMode>
    <Duster />
  </React.StrictMode>,
);

function Duster() {
  return (
    <div>
      <h1 className="font-bold text-zinc-900 hover:text-red-600 md:text-4xl">
        Duster
      </h1>
    </div>
  );
}
