import {
	ADD_FAVORITES,
	REMOVE_FAVORITE
} from '../actions/Actions';

export default (state = [], action) => {
	switch(action.type) {
		case ADD_FAVORITES:
			return state.slice().concat(action.data);
		case REMOVE_FAVORITE:
			return state.filter((video) => video.id !== action.data);
		default:
			return state;
	}
};
