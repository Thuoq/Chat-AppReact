import React from 'react';
import { ReactComponent as IconSearch} from '../../assets/001-candidate.svg';
import { ReactComponent as IconPlus} from '../../assets/002-plus.svg';
import { ReactComponent as IconLogout} from  '../../assets/004-real-estate.svg';
import UserChatBar from '../user-chatbar/user-chatbar.components';
import EVENT_TYPES from '../../Event';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';  
import {selectSocket} from '../../redux/socket/socket.selector';
import {createStructuredSelector} from 'reselect';
import {selectUserCurrent} from '../../redux/userConnect/userConnect.selector';
import {setUserConnect,logoutUser} from '../../redux/userConnect/userConnect.action';

import "./sidebar.styles.scss";  
class SideBar extends React.Component {
	state = {
		searchField: '',
		groups: []
	}
	componentDidMount() {
		const {socket,setUserConnect,logoutUser} = this.props;
		socket.on(EVENT_TYPES.USER__CURRENTLY_ONLINE,(currentUser)=> {
			setUserConnect(currentUser)
		})
		socket.on("CREATE__GROUP",(arrayGroup) => {
			this.setState({groups: arrayGroup });
		}) 
		socket.on("logout-user",(userName)=>{
			logoutUser(userName);
		})
	}
	handleLogout = () => {
		const {logoutUser,socket,user,logout,history} = this.props;
		logout();
		history.push("/")
		socket.emit(EVENT_TYPES.LOG_OUT,user,logoutUser) 
	}
	handleSearchUserOnline = (e) => {
		e.preventDefault();
		this.setState({ searchField : e.target.value})
	}
	handeleClickUserOrGroup = (groupOrUser) => {
		const{socket} = this.props;
		return  () => groupOrUser.includes("groups")
			 ? socket.emit("join-room-chat",groupOrUser)
			 : socket.emit(EVENT_TYPES.CHOOSE_USER_TO_CHAT,groupOrUser);
	}
	handeCreateGroup  = (e) => {
		e.preventDefault();
		const{socket} = this.props;
		const nameGroup = prompt("What Is Your Community Name?");
		socket.emit(EVENT_TYPES.COMMUNITY_CHAT,`${nameGroup} group`);
		this.setState({groups:nameGroup})
	}  
	render() {
		const {userCurrent} = this.props;
		const {searchField,groups} = this.state;
		const sumGroupwithUser = userCurrent.concat(groups)
		const filterUserConnect = sumGroupwithUser.filter( el => el.includes(searchField));

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
					<IconSearch className={searchField.length ?  
								"hidden" : "chat__search--icon" } />
					<input type="text" 
					id="search__input" 
					onChange= {this.handleSearchUserOnline}
					className="input chat__input"
					placeholder="Search"/>
				</div>
				<div className="chat__group u-margin-bottom-small">
					<button onClick={this.handeCreateGroup} className="btn btn--group"><span>Create Your Community</span></button>
					<IconPlus className="chat__group--icon"/>
				</div>
			 
				<div className="chat__active">
					{ 
						filterUserConnect.map((el,idx) =>{
							if(el.includes("group")) {
								return (
								  <UserChatBar 
									key={idx}
									id= {idx}
									user={el}  
									group = "group"
									handeleClickUserOrGroup={this.handeleClickUserOrGroup}/>
								)
							}else{
								return (
								  <UserChatBar 
										key={idx}
										id= {idx}
										user={el}  
										handeleClickUserOrGroup={this.handeleClickUserOrGroup}/>)	
							}
						})
					}
				</div>
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
	logoutUser: user => dispatch(logoutUser(user)),
})
const mapStateToProps = createStructuredSelector({
	socket : selectSocket,
	userCurrent : selectUserCurrent
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SideBar));