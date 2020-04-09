import React from 'react';
import './user-chatbar.styles.scss';

const UserChatBar = ({user,...props}) => (
		<div className="user__profile">
			<h4 className="user__name">{user.toUpperCase()}</h4>
			<span className="user__active"></span>  
		</div>
)

export default UserChatBar;