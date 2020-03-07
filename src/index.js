import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import '@babel/polyfill';

// Store
import store from "./store";

ReactDOM.render(
  <html lang="es">
    <React.StrictMode>
      <main>
        <Provider store={store}>
          <App />
        </Provider>
      </main>
    </React.StrictMode>
  </html>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
