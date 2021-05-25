import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import store from "Store";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const customHistory = createBrowserHistory();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
