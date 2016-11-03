import { ADD_CURRENT_VIDEO } from '../actions/Actions';

export default (state = '', action) => {
	switch(action.type) {
		case ADD_CURRENT_VIDEO:
			return action.data;
		default:
			return state;
	}
};
