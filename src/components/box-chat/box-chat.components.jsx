import React from 'react';
import {ReactComponent as IconSend} from '../../assets/003-send.svg';
import "./box-chat.styles.scss";
class BoxChat extends React.Component {
	constructor(props){ 
		super(props);
		this.state = {
			messeger:""
		}
	}
	// handleChange = (e) => {
	// 	// e.preventDefault();
	// 	// const typeUer =  e.target.value;
	// }
	render() {
		return (
			<div className="body"> 
			<div className="body__user">  
				
			</div>
			<div className="body__messeger">
				<div className="body__messeger--1">
				
				</div>
				<div className="body__messeger--2">
				</div>
			</div>  
			<div className="body__send">  
				<input type="text" 
				placeholder="Type a messeger. . ."
				 className="input body__send--input "/>
				<button>
					<IconSend className="body__send--icon"/>
				</button>  
			</div>  
		</div>
		);
	}
}
export default BoxChat;