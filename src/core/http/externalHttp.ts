import axios from 'axios';
import secret_data from '../../../secret_data.json';

const externalHttp = axios.create({
	baseURL: '/',
	timeout: 30000,
	withCredentials: true,
});

// set default header config
externalHttp.defaults.headers['Accept'] = '*/*';
externalHttp.defaults.headers['Access-Control-Allow-Origin'] = "*";
externalHttp.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
externalHttp.defaults.headers['Authorization'] = 'Bearer ' + secret_data.token.github;

externalHttp.interceptors.request.use((config) => {
	return config;
});

externalHttp.interceptors.request.use((config) => {
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

externalHttp.interceptors.response.use((response) => {
	console.log('axios response' , response);
	return response;
} , (error) => {
	console.log('error.response ###' , error.response);
	alert(error.message);
	location.href = "/about";
});

export default externalHttp;
