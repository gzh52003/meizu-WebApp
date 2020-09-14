import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:2003/' : 'http://39.107.234.250:2003/'
const request = axios.create({
	baseURL: baseURL+"api",
	headers: {
		'Content-Type': 'application/json',

	},
	withCredentials:true
})


export default request