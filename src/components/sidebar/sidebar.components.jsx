import React from 'react';
import { ReactComponent as IconSearch} from '../../assets/001-candidate.svg';
import { ReactComponent as IconPlus} from '../../assets/002-plus.svg';
import { ReactComponent as IconLogout} from  '../../assets/004-real-estate.svg';
import "./sidebar.styles.scss";

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			user: null,
		}
	}

	render() {
		return (
			<div className="side-bar">
			<div className="header__logo">
				<h3 className="heading__primary">COWNUT&SAMBI</h3>
			</div>
			<div className="box__chat">
				<div className="chat__heading">
					<h3 className="heading__secondary">Chats</h3>
				</div>
				<div className="chat__search ">
						<IconSearch className="chat__search--icon" />
					<input type="text" 
					id="search__input" 
					className="input chat__input"
					 placeholder="Search"/>
				</div>
				<div className="chat__group u-margin-bottom-small">
					<button className="btn btn--group"><span>Create Your Community</span></button>
					<IconPlus className="chat__group--icon"/>
				</div>
				<hr/> 
				<div className="chat__active">
					
				</div>
				<hr/>
				<div className="chat__logout">
					<IconLogout className="chat__logout--icon"/>
				</div>
			</div>
		</div>
		);
	}
}
export default SideBar;