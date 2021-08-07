import axios from 'axios';

const instance = axios.create({
	baseURL: '/',
	timeout: 30000,
	withCredentials: true,
	responseType: "json"
});

// set default header config
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.headers['Authorization'] = localStorage.getItem('authorization');
// instance.defaults.headers['Authorization'] = 'Bearer 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';
instance.defaults.headers['RefreshToken'] = localStorage.getItem('refreshtoken');
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((config) => {
	return config;
});

instance.interceptors.request.use((config) => {
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

instance.interceptors.response.use((response) => {
	console.log('axios response' , response);
	return response;
} , (error) => {
	console.log('axios response error' , error);
	return Promise.reject(error);
});

export default instance;