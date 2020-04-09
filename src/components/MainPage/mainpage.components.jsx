import React from 'react';
import './mainpage.styles.scss';
import SideBar from '../sidebar/sidebar.components';
import BoxChat from '../box-chat/box-chat.components';
const MainPage = ({logout,user}) => (
	<div className="main">
		<SideBar user={user} logout = {logout}/>  
		<BoxChat/>
	</div>
)
export default MainPage; 