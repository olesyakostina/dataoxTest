import React from "react";
import PostsList from "./../PostsList/index.jsx";
import "./index.less";
import "antd/dist/antd.css";
import Header from "../Header/index.jsx";

import Pagination from "./../Pagination/index.jsx";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Pagination />
            <PostsList />
        </div>
    );
};

export default App;
