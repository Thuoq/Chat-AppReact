import React from 'react';
import {ReactComponent as IconSend} from '../../assets/003-send.svg';
import "./box-chat.styles.scss";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
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
	}

	render() {
		const {userChoose} = this.state;
		return (  
			<div className="body"> 
			<UserBoxChat userChoose={userChoose}  />
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
const mapStateToProps = createStructuredSelector({
	socket : selectSocket
})
export default connect(mapStateToProps)(BoxChat) ;