  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./styles/responsive.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  