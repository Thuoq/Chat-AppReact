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
module.exports = {
	createUser
}