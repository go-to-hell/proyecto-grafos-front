import axios from 'axios';

export default class FileService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8000/',
            auth: {
                username: 'admin',
                password: '123456'
            }
        });
    }

    upload = (file, filename) => {
        const formData = new FormData();
        formData.append('file', file, filename);
        formData.append('uploader', 'admin');
        return this.api.post('files/', formData);
    }

    getFiles = () => {
        return this.api.get('files/');
    }
}