import { ADD_VIDEO_LENGTH } from '../actions/Actions';

export default (state = 0, action) => {
	switch(action.type) {
		case ADD_VIDEO_LENGTH:
			// convert seconds to milliseconds
			return action.data * 1000;
		default:
			return state;
	}
};
