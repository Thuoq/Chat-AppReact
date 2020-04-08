import React from 'react';
import './mainpage.styles.scss';
import SideBar from '../sidebar/sidebar.components';
import BoxChat from '../box-chat/box-chat.components';
const MainPage = () => (
	<div className="main">
		<SideBar/>  
		<BoxChat/>
	</div>
)
export default MainPage; 