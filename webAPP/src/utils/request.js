import axios from 'axios'

const request = axios.create({
	baseURL:"http://39.107.234.250:2003/api",
	// withCredentials:true
})


export default request