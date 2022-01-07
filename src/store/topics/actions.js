import getPosts from "../../services/getPosts";

export const setTopicActions = (payload) => {
    return {
        type: "topics/setTopics",
        payload: payload,
    };
};

export const loadTopics = () => async (dispatch) => {
    try {
        const { data } = await getPosts();       
        dispatch(setTopicActions(data));
        
    } catch (e) {
        console.error(e);
    }
};
