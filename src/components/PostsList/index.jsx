import React, { useEffect } from "react";
import "./index.less";
import { selectTopics } from "../../store/topics/selectors";
import { loadTopics } from "../../store/topics/actions";
import { useDispatch, useSelector } from "react-redux";


const PostsList = () => {
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);
    console.log(topics);

    useEffect(() => {
        dispatch(loadTopics());
    }, []);

    return (
        <div>
            {topics.length > 0
                ? topics.map((post) => (
                      <div key={post.id}>
                          <p> {post.title}</p>
                          <p> {post.body}</p>
                      </div>
                  ))
                : null}
        </div>
    );
};
export default PostsList;
