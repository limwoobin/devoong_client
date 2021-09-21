import axios from 'axios';

const http = axios.create({
	baseURL: '/',
	timeout: 30000,
	withCredentials: true,
	responseType: "json"
});

// set default header config
http.defaults.headers['Accept'] = 'application/json';
http.defaults.headers['Authorization'] = localStorage.getItem('authorization');
http.defaults.headers['RefreshToken'] = localStorage.getItem('refreshtoken');
http.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.request.use((config) => {
	console.log("========== O K ==========");
	return config;
} , (error) => {
	console.log("========== E R R O R ==========");
	console.dir('error' , error);
	if (error.response) {
		if (error.response.status > 499 && error.response.status < 600) {
			console.log('server error');
			return false;
		}

		if (error.response.data.message) {
			console.log(error.response.data.message);
			return error.response;
		}
	} else {
		return Promise.reject(error.response);
	}
});

http.interceptors.response.use((response) => {
	console.log(response);
	return response;
} , (error) => {
	console.log(error.response.data);
	return Promise.reject(error.response.data);
});

export default http;