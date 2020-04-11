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
			const divNode = document.getElementById('box-messeger');
			const node = document.createElement('div');
			node.className = "messeger-middle left";
			const textMesseger  = document.createTextNode(messeger);
			node.appendChild(textMesseger);
			divNode.insertBefore(node,divNode.childNodes[0]);
		})
	}

	handeSendMesseger = (e) => {
		const {messeger,userChoose} = this.state;
		const {socket} = this.props;
		const node = document.createElement('div');
		const divNode = document.getElementById('box-messeger');
		const textMesseger  = document.createTextNode(messeger);
		node.className = "messeger-middle right";
		node.appendChild(textMesseger);
		document.getElementById("input-send").value="";
		divNode.insertBefore(node,divNode.childNodes[0]);
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
			<div className="body__messeger" id="box-messeger">
				
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