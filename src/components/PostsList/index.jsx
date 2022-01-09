import React, { useEffect, useState } from "react";
import EditModal from "./../EditModal/index.jsx";

import "./index.less";
import { selectTopics } from "../../store/topics/selectors";
import { loadTopics } from "../../store/topics/actions";
import { useDispatch, useSelector } from "react-redux";

import { Card, Button } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const PostsList = () => {
    //openClose Modal
    let [modal, setModal] = useState(false);

    const edit = () => {
        setModal(true);
    };
    const btnModalClose = () => {
        setModal(false);
    };
    //-----------------------
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);
    console.log(topics);

    useEffect(() => {
        dispatch(loadTopics());
    }, []);

    return (
        <div>
            {modal && <EditModal btnModalClose={btnModalClose} />}

            <Card>
                <div className="card">
                    {topics.length > 0
                        ? topics.map((post) => (
                              <div key={post.id}>
                                  <p> {post.title}</p>
                                  <p> {post.body}</p>
                                  <div className="btn_icons">
                                      <div>
                                          <span className="btn_item">
                                              delete
                                          </span>

                                          <DeleteOutlined />
                                      </div>
                                      <div>
                                          <span
                                              onClick={edit}
                                              className="btn_item"
                                          >
                                              edit
                                          </span>
                                          <EditOutlined />
                                      </div>
                                  </div>
                              </div>
                          ))
                        : null}
                </div>
            </Card>
        </div>
    );
};
export default PostsList;
