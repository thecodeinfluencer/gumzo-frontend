import "firebaseui/dist/firebaseui.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthUserProvider } from "./firebase/auth";
import ThemeProvider from "./theme";
import "./styles/firebaseui.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthUserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthUserProvider>
  </React.StrictMode>
);
