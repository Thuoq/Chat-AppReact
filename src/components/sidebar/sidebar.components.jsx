import React from 'react';
import { ReactComponent as IconSearch} from '../../assets/001-candidate.svg';
import { ReactComponent as IconPlus} from '../../assets/002-plus.svg';
import { ReactComponent as IconLogout} from  '../../assets/004-real-estate.svg';
import UserChatBar from '../user-chatbar/user-chatbar.components';
import EVENT_TYPES from '../../Event';
import {connect} from 'react-redux';
import {selectSocket} from '../../redux/socket/socket.selector';
import {createStructuredSelector} from 'reselect';
import {selectUserCurrent} from '../../redux/userConnect/userConnect.selector';
import {setUserConnect,logoutUser} from '../../redux/userConnect/userConnect.action';


import "./sidebar.styles.scss";  

class SideBar extends React.Component {
	componentDidMount() {
		const {socket,setUserConnect} = this.props;
		socket.on(EVENT_TYPES.USER__CURRENTLY_ONLINE,(currentUser)=> {
			setUserConnect(currentUser)
		})
	}
	handleLogout = () => {
		const {logoutUser,socket,user,logout} = this.props;
		//logout();
		socket.emit(EVENT_TYPES.LOG_OUT,user) 
		socket.on("logout-user",(userName)=>{
			logoutUser(userName);
		})
	} 
	render() {
		const {userCurrent} = this.props;
		return (
			<div className="side-bar">
			<div className="header__logo">
				<h3 className="heading__primary">COWNUT&SAMBI</h3>
			</div>
			<div className="box__chat">
				<div className="chat__heading">
					<h3 className="heading__secondary">Chats</h3>
				</div>
				<div className="chat__search ">
						<IconSearch className="chat__search--icon" />
					<input type="text" 
					id="search__input" 
					className="input chat__input"
					 placeholder="Search"/>
				</div>
				<div className="chat__group u-margin-bottom-small">
					<button className="btn btn--group"><span>Create Your Community</span></button>
					<IconPlus className="chat__group--icon"/>
				</div>
				<hr/> 
				<div className="chat__active">
					{
						userCurrent.map((el,idx) => <UserChatBar key={idx} user={el}/> )
					}
				</div>
				<hr/>
				<div className="chat__logout">
					<IconLogout onClick={this.handleLogout} className="chat__logout--icon"/>
				</div>
			</div>
		</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	setUserConnect : (user) => dispatch(setUserConnect(user)),
	logoutUser: user => dispatch(logoutUser(user))
})
const mapStateToProps = createStructuredSelector({
	socket : selectSocket,
	userCurrent : selectUserCurrent
})
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);