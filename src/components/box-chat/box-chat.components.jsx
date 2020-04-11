import React from 'react';
import {ReactComponent as IconSend} from '../../assets/003-send.svg';
import "./box-chat.styles.scss";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import EVENT_TYPES from '../../Event';
import {selectSocket} from '../../redux/socket/socket.selector';
import UserBoxChat from '../user-boxChat/user-boxChat.components'
class BoxChat extends React.Component {
	constructor(props){ 
		super(props);
		this.state = {
			messeger:"",
			userChoose: "",
		}
	}
	componentDidMount() {
		const {socket} = this.props;
		socket.on("Choose-user-date",(userChoose)=> {
			this.setState({userChoose:userChoose})
		})
		socket.on("SENT-DATA-MESSEGER",messeger => {
			console.log(messeger)
			const node = document.createElement('div');
			node.className = "body__messeger-content  body__messeger-content--1";
			const textMesseger  = document.createTextNode(messeger);
			node.appendChild(textMesseger);
			document.getElementById('user-client').appendChild(node);
		})
	}

	handeSendMesseger = (e) => {
		const {messeger,userChoose} = this.state;
		const {socket,user} = this.props;
		const node = document.createElement('div');
		const textMesseger  = document.createTextNode(messeger);
		node.className = "body__messeger-content  body__messeger-content--1";
		node.appendChild(textMesseger);
		document.getElementById("input-send").value="";
		document.getElementById('user-host').appendChild(node);
		socket.emit(EVENT_TYPES.MESSAGE_SENT,
			{messeger: messeger,userChoose:userChoose})  
	}
	handleChange = (e) => {
		e.preventDefault();
		this.setState({messeger: e.target.value})
	}
	render() {
		const {userChoose} = this.state;
		return (  
			<div className="body"> 
			<UserBoxChat userChoose={userChoose}  />
			<div className="body__messeger">
				<div className="body__messeger--1" id="user-host">

				</div>
				<div className="body__messeger--2"id="user-client">

				</div>
			</div>  
			<div className="body__send">  
				<input type="text" 
				placeholder="Type a messeger. . ."
				id ="input-send"
				onChange= {this.handleChange}
				className="input body__send--input "/>
				<button onClick  = {this.handeSendMesseger}>
					<IconSend className="body__send--icon"/>
				</button>  
			</div>  
		</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	socket : selectSocket
})
export default connect(mapStateToProps)(BoxChat);