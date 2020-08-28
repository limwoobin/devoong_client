import axios from 'axios';

const instance = axios.create(
    {
        // baseURL: 'http://localhost:4000',
        baseURL: process.env.API_BASE_URL,
        timeout: 2500,
        withCredentials: true,
        responseType: "json"
    }
);

// set default header config
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.headers['Authorization'] = localStorage.getItem('authorization');
instance.defaults.headers['RefreshToken'] = localStorage.getItem('refreshtoken');
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((config) => {
    return config;
});

instance.interceptors.response.use((response) => {
    console.log("========== O K ==========");
    return response;

}, (error) => {
    console.log("========== E R R O R ==========");
    console.dir(error);
    if (error.response) {
        if (error.response.status > 499 && error.response.status < 600) {
            console.log(error.response.data);
            // Vue.router({ name: 'Page500' });
            // const message = _.get(error.response.data, 'message', 'Internal Server Error');
            // Vue.smithToast({ title: '서버에러', message, type: 'error' });
            return false;
        }

        if (error.response.status === 404) {
            return false;
        }

        if (error.response.status === 401) {
            // history.push("/login");
            return false;
        }

        if (error.response.status === 403) {
            // history.push("/login");
            return false;
        }

        if (error.response.data.message) {
            console.log(error.response.data.message);
            return error.response;
        }
    } else {
        return Promise.reject(error.response);
    }
    return false;
});

export default instance;
