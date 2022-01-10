import axios from "axios";

export const getPosts = (page, limit) =>
    axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
export const deleteTopics = (id) =>
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

// for API whith normal put req
// export const editTopic = (newTopic) =>
//     axios.put(
//         `https://jsonplaceholder.typicode.com/posts/${newTopic.id}`,
//         newTopic
//     );
