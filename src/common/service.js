import http from "./http";

export const login = (username, password) => {
	return http.get("login" + "/" + username + "/" + password);
};
export const register = (username, password) => {
	return http.get("register" + "/" + username + "/" + password);
};
export const mainInformation = () => {
	return http.get("main");
};
export const addAddress = () => {
	return http.post("addess");
};
export const addShoppingH = (obj) => {
	return http.post("Purchase", obj);
};
export const ShoppingB = (userid) => {
	return http.get("select" + "/" + userid);
};
export const shoppingD = (id, userid) => {
	return http.get("del2" + "/" + id + "/" + userid);
};
