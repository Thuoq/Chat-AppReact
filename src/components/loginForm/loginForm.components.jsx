import React from 'react';
import "./loginForm.styles.scss";


class LoginForm extends React.Component{
	constructor(props) {
		super(props);

		this.state= {
			nickName: "",
			errr: ""
		}
	}
	render() {
		return (
			<div className="header" >
				<form className= "header__form">
					<input type="text" className="header__input"
					 placeholder="Please Type Your Cool Name !"/>
				</form>
			</div>
		);
	}
}
export default LoginForm;