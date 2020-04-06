import React from 'react';
import io from 'socket.io-client';
import './sign-in.styles.scss';
import {USER__CONNECTED,LOG_OUT} from '../../Event';
import LoginForm from '../loginForm/loginForm.components';
const socketUrl ="http://192.168.1.5:2708";
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			socket: null,
			user: null,
		}
	}
	componentWillMount() {
		this.initSocket();
	}

	initSocket = () => {
		const socket = io(socketUrl);
		socket.on('connect',()=>{
			//console.log("Connected ne")
		})
		this.setState({socket}); 
	}
	/*
	Set the user property in state
	@parama user {id: number,name:string}
	*/
	setUser =(user)=>{
		const {socket} = this.state;
		socket.emit(USER__CONNECTED,user);
		this.setState({user})
	}
	/*
	* Sets the user property in state to null
	*/
	logout = () => {
		const {socket} = this.state;
		socket.emit(LOG_OUT)
		this.setState({user: null})
	}
	render() {
		const {socket} = this.state;
		return (
			<LoginForm socket={socket} setUser ={this.setUser} />
		);
	}
}
export default SignIn