import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'http://localhost:8033/'
    }
)

export default instance;