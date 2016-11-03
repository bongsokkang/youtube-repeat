import { ADD_SEARCH_RESULTS } from '../actions/Actions';

export default (state = [], action) => {
	switch(action.type) {
		case ADD_SEARCH_RESULTS:
			return action.data;
		default:
			return state;
	}
};
