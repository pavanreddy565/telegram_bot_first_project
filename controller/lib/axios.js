const axios = require('axios');
const MY_TOKEN = "6667488836:AAFQ-9VBXlYt0GVMYLRjT--69IxDP4ppJeY";
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            });
        },
        post(method, data) {
            console.log(`data :${method}`);
            return axios({
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data
            });
        }
    };
}

module.exports = {axiosInstance:getAxiosInstance()} ;
