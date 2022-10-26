import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-monitora.herokuapp.com',
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' },
});

export default api;
