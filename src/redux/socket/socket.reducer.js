import io from 'socket.io-client';
const socketUrl ="http://192.168.1.5:2708";
const socket = io(socketUrl);
const INITIAL_STATE = {
	socket : socket, 
}

const SocketReducer = (state = INITIAL_STATE , nextState) => {
	switch(nextState.type){
		default:
			return state
	}
}
export default SocketReducer;
