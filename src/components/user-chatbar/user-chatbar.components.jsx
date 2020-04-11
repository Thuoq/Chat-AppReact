import React from 'react';
import './user-chatbar.styles.scss';
import {withRouter} from 'react-router-dom'
const UserChatBar = ({user,handleChooseUserChat,history,match,id}) =>{ 
	return (  
		<div className="user__profile"  
		onClick = {() => {handleChooseUserChat(user); 
				history.push(`${match.url}messeger/${id}`);}}>
			<h4 className="user__name">{user.toUpperCase()}</h4>
			<span className="user__active"></span>  
		</div>
)}

export default withRouter(UserChatBar);