import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Hydrate when the prerender script has emitted server-rendered HTML, otherwise mount fresh.
if (root.firstElementChild) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
