import React from 'react';
import "./loginForm.styles.scss";
import {VERIFY_USER} from  '../../Event';

class LoginForm extends React.Component{
	constructor(props) {
		super(props);

		this.state= {
			nickName: "",
			error: ""
		}
	}
	setUser = ({user,isUser}) => {
		if(isUser){
			this.setError("User name taken");
			alert("User name taken")
		}else {
			this.props.setUser(user)
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();

		const {socket} = this.props;
		const {nickname} = this.state;
		socket.emit(VERIFY_USER,nickname,this.setUser)
	}
	handleChange = (e) => {
		e.preventDefault()
		this.setState({nickname: e.target.value});
		console.log(this.state.nickname)
	}
	setError = (error) => {
		this.setState({error})
	}
	render() {
		const {nickname} =this.state;
		return (
			<div className="header" >
				<form className= "header__form" onSubmit={this.handleSubmit}>
					<input type="text" className="header__input"
					 placeholder="Please Type Your Cool Name !"
					 id="nickname"
					 ref= {(input) => this.textInput = input}
					 value={nickname}
					 onChange = {this.handleChange}
					 />
				</form>
			</div>
		);
	}
}
export default LoginForm;