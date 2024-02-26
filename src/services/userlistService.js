import axios from 'axios';

export default class UserlistService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://127.0.0.1:8000/',
            auth: {
                username: 'admin',
                password: '123456'
            }
        });
    }

    getUsers = () => {
        return this.api.get('users/');
    }
}