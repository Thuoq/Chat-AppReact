import UserConnectTypes from './userConnect.types';
export const setUserConnect = (user) => ({
	type: UserConnectTypes.SET_USER_CONNECT_SIDE_BAR,
	payload: user
})
export const logoutUser = user => ({
	type : UserConnectTypes.LOGOUT_USER_CONNECT,
	payload: user
})
