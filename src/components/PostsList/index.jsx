import React, { useEffect } from "react";
import "./index.less";
import { selectTopics } from "../../store/topics/selectors";
import { loadTopics } from "../../store/topics/actions";
import { useDispatch, useSelector } from "react-redux";

import { Card, Button } from "antd";
import "antd/dist/antd.css";

const PostsList = () => {
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);
    console.log(topics);

    useEffect(() => {
        dispatch(loadTopics());
    }, []);

    return (
        <div>
            <Card>
                <div className="card">
                    {topics.length > 0
                        ? topics.map((post) => (
                              <div key={post.id}>
                                  <p> {post.title}</p>
                                  <p> {post.body}</p>
                                  <Button type="primary">delete</Button>
                                  <Button type="danger">edit</Button>
                              </div>
                          ))
                        : null}
                </div>
            </Card>
        </div>
    );
};
export default PostsList;
