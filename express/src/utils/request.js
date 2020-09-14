import axios from 'axios';

let baseURL='http://localhost:2003'


const request = axios.create({
	baseURL: baseURL + '/api',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials:true
});


export default request;
