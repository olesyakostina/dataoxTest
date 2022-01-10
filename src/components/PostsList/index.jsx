import React, { useEffect, useState } from "react";
import EditModal from "./../EditModal/index.jsx";

import "./index.less";
import { selectTopics, selectTotalcount } from "../../store/topics/selectors";
import {
    loadTopics,
    loadDeleteTopics,
    setTopicActions,
} from "../../store/topics/actions";
import { useDispatch, useSelector } from "react-redux";

import { Card, Button, Pagination } from "antd";
import "antd/dist/antd.css";
import {
    DeleteOutlined,
    EditOutlined,
    // SearchOutlined,
} from "@ant-design/icons";

const PostsList = () => {
    //openClose Modal
    const dispatch = useDispatch();

    const topics = useSelector(selectTopics);
    const total = useSelector(selectTotalcount);

    let [modal, setModal] = useState(false);
    let [editPost, setEditPost] = useState(null);
    let [currentPage, setCurrentPage] = useState(1);
    let [search, setSearch] = useState("");

    const PAGE_SIZE = 5;

    const changePage = (page, pageSize) => {
        console.log(page, pageSize);
        setCurrentPage(page);
    };

    useEffect(() => {
        dispatch(loadTopics(currentPage, PAGE_SIZE));
    }, [currentPage]);

    //-----------------------
    const openEditModal = (post) => {
        console.log(post);
        setEditPost(post);
        setModal(true);
    };
    const btnModalClose = () => {
        setModal(false);
    };
    // delete
    const deleteTopic = (id) => {
        dispatch(loadDeleteTopics(id));
    };
    //edit
    const editTopic = (newTopic) => {
        const newTopics = topics.map((item) => {
            if (item.id === newTopic.id) {
                return newTopic;
            } else {
                return item;
            }
        });
        console.log(newTopics);
        dispatch(setTopicActions(newTopics));
    };

    return (
        <div>
            {modal && (
                <EditModal
                    btnModalClose={btnModalClose}
                    editPost={editPost}
                    editTopic={editTopic}
                />
            )}
            <div className="searchInp">
                <input
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Pagination
                total={total}
                pageSize={PAGE_SIZE}
                onChange={changePage}
                current={currentPage}
            />
            <Card>
                <div className="card">
                    {topics.length > 0
                        ? topics
                              .filter((post) => {
                                  if (search === "") {
                                      return post;
                                  } else if (
                                      post.title
                                          .toLowerCase()
                                          .includes(search.toLowerCase())
                                  ) {
                                      return post;
                                  }
                              })
                              .map((post) => (
                                  <div key={post.id}>
                                      <p> {post.title}</p>
                                      <p> {post.body}</p>
                                      <div className="btn_icons">
                                          <div>
                                              <span
                                                  onClick={() =>
                                                      deleteTopic(post.id)
                                                  } // in API post.id
                                                  className="btn_item"
                                              >
                                                  delete
                                              </span>

                                              <DeleteOutlined />
                                          </div>
                                          <div>
                                              <span
                                                  onClick={() =>
                                                      openEditModal(post)
                                                  }
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
