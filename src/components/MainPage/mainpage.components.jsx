import React from 'react';
import './mainpage.styles.scss';
import SideBar from '../sidebar/sidebar.components';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectUserCurrent} from '../../redux/userConnect/userConnect.selector';
import BoxChat from '../box-chat/box-chat.components';

class MainPage  extends React.Component {
	render() {
		const {logout,user,userCurrent} = this.props;
		console.log(userCurrent)
		return (
			<div className="main">
				<SideBar user={user} logout = {logout}/>  
				<Switch>
				    <Route exact path="/messeger" component ={BoxChat}/>
					{
					 userCurrent.map((el,idx) => <Route exact path={`/messeger/:${idx}`} key={idx} component ={BoxChat} />)
					}
				</Switch>
		</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	userCurrent: selectUserCurrent,
})
export default connect(mapStateToProps)(MainPage) ; 