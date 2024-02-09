import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="marvinadan.us.auth0.com"
      clientId="Nof33GJEERON3PlF2tE20HSKlBKZxoAO"
      redirect_uri="https://231e-201-134-180-249.ngrok-free.app"
      audience="https://Marvin-Api-Endpoint/"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
