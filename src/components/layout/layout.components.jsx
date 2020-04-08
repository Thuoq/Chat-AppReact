import React from 'react';
import io from 'socket.io-client';
import {createStructuredSelector} from 'reselect';
import {selectSocket} from '../../redux/socket/socket.selector';
import {connect} from 'react-redux';
import "./layout.styles.scss";
import {USER__CONNECTED,LOG_OUT} from '../../Event';
import LoginForm from '../loginForm/loginForm.components';
import MainPage from '../MainPage/mainpage.components';
const socketUrl ="http://192.168.1.5:2708";
class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		} 
	}
	// componentWillMount() { 
	// 	this.initSocket();
	// }  
	// initSocket = () => {
	// 	// const socket1 = io(socketUrl);
	// 	// const {socket} = this.props;
	// 	// socket.on('connect',()=>{
	// 	// 	//console.log("Connected ne")
	// 	// })
	// 	//this.setState({socket}); 
	// }
	/*
	Set the user property in state
	@parama user {id: number,name:string}
	*/
	setUser =(user)=>{
		const {socket} = this.props;

		socket.emit(USER__CONNECTED,user);
		this.setState({user})
	}
	/*
	* Sets the user property in state to null
	*/
	// logout = () => {
	// 	const {socket} = this.state;
	// 	socket.emit(LOG_OUT)
	// 	this.setState({user: null})
	// }
	render() {
		const {user} = this.state;
		const {socket} = this.props; 
		return (  
			<div className = "container">
				{
					user ?  <MainPage/>  :
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