import {createSelector} from 'reselect';

const selectUserConnect = state => state.userConnect

export const selectUserCurrent = createSelector(
	[selectUserConnect],
	userConnect => userConnect.userCurrent
)