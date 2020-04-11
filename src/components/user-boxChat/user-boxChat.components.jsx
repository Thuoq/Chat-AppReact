import React from 'react';
import "./user-boxChat.styles.scss";
 
const UserBoxChat = ({userChoose}) => {
	return (
	<div className="body__user">  
				<span className="body__user--active"></span>    
				<span className="body__user--name">{userChoose}</span>   
	</div>
)}
export default UserBoxChat;