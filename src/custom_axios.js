import axios from "axios";

const instance = axios.create({
    baseURL : "https://vuejs-axios-blog-9e5ee.firebaseio.com",
})

// instance.defaults.headers.common[]
export default instance;
