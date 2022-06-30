import axios from 'axios';
import Interceptor from './interceptor';

const baseURL = import.meta.env.VITE_API_URL;
const headers = {
	'Access-Control-Origin': '*',
	'Content-Type': 'application/json;charset=utf-8',
	'Access-Control-Allow-Method': 'POST,GET,DELETE',
};

const api = axios.create({
	baseURL,
	headers,
});

Interceptor(api);

export default api;
