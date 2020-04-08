import {createSelector} from 'reselect';


export const selectSocketStateGlobal = state => state.socketGlobal;

export const selectSocket = createSelector(
	[selectSocketStateGlobal],
	socketGlobal => socketGlobal.socket
)



 