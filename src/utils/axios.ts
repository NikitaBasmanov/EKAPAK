import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.aspros.ru/api',
});

export default apiClient;
