import React from 'react';
import './user-chatbar.styles.scss';
import {withRouter} from 'react-router-dom'
const UserChatBar = ({user,handeleClickUserOrGroup,history,match,id,group}) =>{
	const userClick = group ? handeleClickUserOrGroup(group) : handeleClickUserOrGroup(user)
	return (    
		
		<div className={ group ? "group" : "user__profile"} 
		onClick = {() => {userClick(); history.push(`${match.url}messeger/${id}`);}}> 
			<h4 className={ group ? "group__name" : "user__name"}>{user.toUpperCase()}</h4>
			<span className="user__active"></span>  
		</div>
)}

export default withRouter(UserChatBar);