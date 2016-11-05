import {
	ADD_CURRENT_VIDEO,
	ADD_VIDEO_LENGTH
} from '../actions/Actions';

const defaultState = {
	id: '',
	img: '',
	title: '',
	author: '',
	videoLength: 0
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case ADD_CURRENT_VIDEO:
			return Object.assign({}, state, action.data);
		case ADD_VIDEO_LENGTH:
			return Object.assign({}, state,
				{ videoLength: action.data * 1000 });
		default:
			return state;
	}
};
