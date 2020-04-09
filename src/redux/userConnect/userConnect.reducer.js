import UserConnectTypes from './userConnect.types';

const INITIAL_STATE = {
	userCurrent: [],
}

const userConnectReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UserConnectTypes.SET_USER_CONNECT_SIDE_BAR:
			return {
				...state,
				userCurrent: Object.keys(action.payload)
			}
		case UserConnectTypes.LOGOUT_USER_CONNECT: 
			return{
				...state,
				userCurrent: state.userCurrent.filter(el => el !== action.payload)
			}
		default: 
			return state
	}
}
export default userConnectReducer; 