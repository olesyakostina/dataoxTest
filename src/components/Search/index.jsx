import React from "react";
import "./index.less";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="enter request...." />
            <button className="search-btn">
                <SearchOutlined />
            </button>
        </div>
    );
};
export default Search;
