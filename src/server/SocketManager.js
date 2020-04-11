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
			setUser({isUser:false,user: createUser({name:nickname,id: socket.id})})
		}  
	})     
	// ADD USER    
	socket.on(EVENT_TYPES.USER__CONNECTED,(user)=>{
		userConnected = addUser(userConnected,user);
		//console.log(userConnected);
		io.sockets.emit(EVENT_TYPES.USER__CURRENTLY_ONLINE,userConnected)	
	})
	socket.on(EVENT_TYPES.LOG_OUT, (userOut) => {
		socket.broadcast.emit("logout-user",userOut.name);  
		delete userConnected[userOut.name];  	
	})   
	socket.on(EVENT_TYPES.CHOOSE_USER_TO_CHAT,(user) => {
		socket.emit("Choose-user-date",user)
	})
	socket.on(EVENT_TYPES.MESSAGE_SENT,({messeger,userChoose}) => {
		if(userChoose in userConnected) { 
			let socketId = userConnected[userChoose].id;
			io.to(`${socketId}`).emit("SENT-DATA-MESSEGER",messeger)
		}   
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