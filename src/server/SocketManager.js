const EVENT_TYPES = require("../Event");
const {createChat,createUser,createMessage} = require("../Factories");
const io = require("./index").io;
let userConnected ={}
/*userName: {id, name : userName} nest object*/
module.exports = (socket) => {  
	console.log("socket Id " + socket.id);
	// VERIFY USER
	socket.on(EVENT_TYPES.VERIFY_USER, (nickname,setUser)=> {
		if(checkUserConnected(userConnected,nickname)){
			setUser({isUser:true,user:null}) 
		}else{
			setUser({isUser:false,user: createUser({name:nickname})})
		}
	})
	// ADD USER
	socket.on(EVENT_TYPES.USER__CONNECTED,(user)=>{
		userConnected = addUser(userConnected,user);
		socket.user = user,
		console.log(userConnected);
		//console.log(socket.user)
	})
	socket.on(EVENT_TYPES.TYPING,(data)=>{
		console.log(data);
		io.sockets.emit("serverSend",data + `lewlew`)
	})
}

/*@param user: {id: , name:}*/
function addUser (userPrev,nextUser) {
	let currentUser = Object.assign({},userPrev);
	currentUser[nextUser.name] = nextUser;
	return currentUser 
}

/*RemoveUser*/
// function removeUser() {

// }
function checkUserConnected (user,isUser) {
	return isUser in user
}