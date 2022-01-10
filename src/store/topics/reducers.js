const initState = {
    topics: [],
    totalCount: 0,
};

const topicReducer = (state = initState, action) => {
    switch (action.type) {
        case "topics/setTopics":
            return {
                ...state,
                topics: [...action.payload],
            };

        case "topics/setTotalCount":
            return {
                ...state,
                totalCount: action.payload,
            };
        
        default:
            return state;
    }
};
export default topicReducer;
