import { getPosts, deleteTopics } from "../../services/postsApi";

export const setTopicActions = (payload) => {
    return {
        type: "topics/setTopics",
        payload: payload,
    };
};
export const setTotalCountActions = (payload) => {
    return {
        type: "topics/setTotalCount",
        payload: payload,
    };
};

export const loadTopics = (page, limit) => async (dispatch) => {
    try {
        const response = await getPosts(page, limit);
        // console.log(response);
        dispatch(setTopicActions(response.data));
        dispatch(setTotalCountActions(response.headers["x-total-count"]));
    } catch (e) {
        console.error(e);
    }
};
//------
// export const setDeleteTopicActions = (payload) => {
//     return {
//         type: "topics/setDeleteTopics",
//         payload: payload,
//     };
// };

export const loadEditTopic = (newTopic) => async (dispatch) => {
    try {
        await editTopic(newTopic);
        dispatch(loadTopics());
    } catch (error) {
        console.log(error);
    }
};

export const loadDeleteTopics = (id) => async (dispatch, getState) => {
    try {
        const response = await deleteTopics(id);
        // for  API with normal delete request 
        // if (response.status === 200) { 
        //     dispatch(loadTopics());
        // } else {
        //     console.error("error");
        // }

        const topics = getState().topicReducer.topics; // текущий стейт
        const newTopics = topics.filter((item) => item.id !== id); // item.id c апи берем
        console.log(newTopics);
        dispatch(setTopicActions(newTopics));
    } catch (e) {
        console.error(e);
    }
};
