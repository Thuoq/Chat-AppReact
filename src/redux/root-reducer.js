import {combineReducers} from 'redux';
import SocketReducer from './socket/socket.reducer'; 
import userConnectReducer from './userConnect/userConnect.reducer';
export  const rootReducer = combineReducers({
	socketGlobal : SocketReducer,
	userConnect : userConnectReducer
})  