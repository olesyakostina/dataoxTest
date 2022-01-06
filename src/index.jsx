import "./index.less";
import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";

import App from "./components/App/index.jsx";
import store from "./store/index.jsx";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
