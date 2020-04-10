import React from 'react';
import './user-chatbar.styles.scss';
 
const UserChatBar = ({user,handleChooseUserChat}) =>{  
	return (  
		<div className="user__profile"  onClick = {() => handleChooseUserChat(user)}>
			<h4 className="user__name">{user.toUpperCase()}</h4>
			<span className="user__active"></span>  
		</div>
)}

export default UserChatBar;