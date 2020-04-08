import {combineReducers} from 'redux';
import SocketReducer from './socket/socket.reducer'; 
export  const rootReducer = combineReducers({
	socketGlobal : SocketReducer,
})  