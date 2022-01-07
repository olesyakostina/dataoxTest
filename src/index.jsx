import "./index.less";
import React from "react";
import { render } from "react-dom";
import App from "./components/App/index.jsx";

import { Provider } from "react-redux";
import store from "./store/index.jsx";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
