/*
* createUser
* @prop id {string}
* @prop name {string}
* @param {object}
* 		name {string}
*/

const createUser = ({ name = "",id} = {}) => ({
	id,
	name,
})

/*
* createMessage
* Creates a message object
* @prop id {string}
* @prop time {Date} the time in 24hr format i.e 14:22
* @prop message {string} actual string message
* @prop sender {string} sender of the message
* @param {object}
* 	message {string}
* 	sender {string}
*/

const createMessage  = ({message = "",sender=""} = {}) => ({
	id: uuidv4(),
	time:getTime(new Date(Date.now())),
	message,
	sender,
})

/*
* createChat
* @prop id {string}
* @prop name {string}
* @prop messages {Array.Message}
* @prop users {Array.string}
* @param {object}
* 	messages {Array.Message}
*	name {string}
* 	users {Array.string}
*/

const createChat = ({messages = [],name="Communtity",users = []} = {}) =>({
	 id: uuidv4(),
	 name,
	 messages,
	 users,
	 typingUsers: []
})



/*
* @param date {Date}
* @return a string represented in 24hr time i.e '12:30'
*/
const getTime = (date) => {
	return `${date.getHours()} : ${"0"+date.getMinures().slice(-2)}`
}
module.exports = {
	createChat,
	createUser,
	createMessage
}