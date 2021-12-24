import axios from "axios";

const http = axios.create({
	baseURL: "http://192.168.140.74:8080/",
	timeout: 5000,
	headers: {},
});
export default http;
