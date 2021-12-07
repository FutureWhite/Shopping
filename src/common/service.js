import http from "./http";

export const login = (username, password) => {
	return http.get("login" + "/" + username + "/" + password);
};
export const register = (username, password) => {
	return http.get("register" + "/" + username + "/" + password);
};
