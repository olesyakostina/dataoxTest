import React, { useState } from "react";
import "./index.less";

const EditModal = ({ editPost, btnModalClose, editTopic }) => {
    const [editTitleValue, setEditTitleValue] = useState(editPost.title);
    const [editBodyValue, setEditBodyValue] = useState(editPost.body);

    const btnEditSave = () => {
        const newPost = {
            ...editPost,
            body: editBodyValue,
            title: editTitleValue,
        };
        // console.log(newPost);
        editTopic(newPost);
        btnModalClose();
    };

    return (
        <div className="modal-wrapper">
            <div className="edit-modal-wrapper">
                <div className="window-btn__close">
                    <button onClick={btnModalClose}>X</button>
                </div>
                <div className="edit-inp">
                    <input
                        type="text"
                        className="edit-inp"
                        value={editTitleValue}
                        onChange={(e) => setEditTitleValue(e.target.value)}
                    />
                    <input
                        type="text"
                        className="edit-inp"
                        value={editBodyValue}
                        onChange={(e) => setEditBodyValue(e.target.value)}
                    />
                    <button
                        className="description-wrapper_btn"
                        onClick={btnEditSave}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};
export default EditModal;
