import React from 'react';
import {ReactComponent as IconSend} from '../../assets/003-send.svg';
import "./box-chat.styles.scss";
import {TYPING} from '../../Event';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSocket} from '../../redux/socket/socket.selector';
class BoxChat extends React.Component {
	constructor(props){ 
		super(props);
		this.state = {
			messeger:""
		}
	}
	handleChange = (e) => {
		e.preventDefault();
		const {socket} = this.props;
		const typeUer =  e.target.value;
		socket.emit(TYPING,typeUer);
	}
	render() {
		const {socket} = this.props;
		socket.on("serverSend",data => console.log(data))
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
				onChange={this.handleChange}
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