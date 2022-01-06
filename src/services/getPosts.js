import axios from "axios";

const getPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");

export default getPosts;
