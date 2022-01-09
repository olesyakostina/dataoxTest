import React, { useState } from "react";
import "./index.less";

const EditModal = (props) => {
    // const [editTitleValue, setEditTitleValue] = useState("");
    // const [editBodyValue, setEditBodyValue] = useState("");

    // const btnModalClose = () => {};
    // const btnEditSave = () => {};

    // const getTitleInputValue = () => {};
    // const getBodyInputValue = () => {};
    return (
        <div className="modal-wrapper">
            <div className="edit-modal-wrapper">
                <div className="window-btn__close">
                    <button onClick={props.btnModalClose}>X</button>
                </div>
                <div className="edit-inp">
                    <input
                        type="text"
                        className="edit-inp"
                        // value={editTitleValue}
                        // onChange={getTitleInputValue}
                    />
                    <input
                        type="text"
                        className="edit-inp"
                        // value={editBodyValue}
                        // onChange={getBodyInputValue}
                    />
                    <button
                        className="description-wrapper_btn"
                        // onClick={btnEditSave}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};
export default EditModal;
