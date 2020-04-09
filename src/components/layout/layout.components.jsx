import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectSocket} from '../../redux/socket/socket.selector';
import {connect} from 'react-redux';
import "./layout.styles.scss";
import {USER__CONNECTED} from '../../Event';
import LoginForm from '../loginForm/loginForm.components';
import MainPage from '../MainPage/mainpage.components';
class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		} 
	}
	setUser =(user)=>{
		const {socket} = this.props;

		socket.emit(USER__CONNECTED,user);
		this.setState({user})
	}
	/*
	* Sets the user property in state to null
	*/
	logout = () => { 
		this.setState({user: null})
	}
	render() {
		const {user} = this.state;
		const {socket} = this.props; 
		return (  
			<div className = "container">
				{
					user ?  <MainPage user={user} logout = {this.logout}/>  :
					<LoginForm socket={socket} setUser ={this.setUser}/>
				}
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	socket :  selectSocket  
})
export default connect(mapStateToProps)(Layout)