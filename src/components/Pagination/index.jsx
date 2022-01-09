import React from "react";
import { Pagination } from "antd";

const PaginationUI = () => {
    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    return (
        <>
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
            />
        </>
    );
};
export default PaginationUI;
