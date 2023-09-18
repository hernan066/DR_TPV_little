import ReactDOM from "react-dom/client";
import "regenerator-runtime";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "./context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
