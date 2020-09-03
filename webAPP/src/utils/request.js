import axios from 'axios'

const request = axios.create({
	baseURL:"http://loaclhost:2003/api",
	withCredentials:true
})


export default request