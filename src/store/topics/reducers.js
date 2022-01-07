const initState = {
    topics: [],
};

const topicReducer = (state = initState, action) => {
    switch (action.type) {
        case "topics/setTopics":
            return {
                ...state,
                topics: [...state.topics, ...action.payload],
            };
        default:
            return state;
    }
};
export default topicReducer;
