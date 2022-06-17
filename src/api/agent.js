import axios from "axios";


const agent = {
    loadPosts: () => {
        try {
            let post = axios.get(`https://blog-backend-7.herokuapp.com/blogpost/all`);
            return post;
        } catch (error) {
            
        }
    }
}

export default agent;