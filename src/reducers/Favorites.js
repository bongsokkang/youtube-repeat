import {
	ADD_FAVORITES,
	REMOVE_FAVORITE
} from '../actions/Actions';

export default (state = [], action) => {
	switch(action.type) {
		case ADD_FAVORITES:
			const newState = state.slice();
			if(!Array.isArray(action.data)) {
				action.data = [action.data];
			}

			for(let i = 0; i < action.data.length; i++) {
				const isValidVideo = (action.data[i]['id'] !== '' ) &&
					!videoIsInArray(newState, action.data[i]['id']);

				if(isValidVideo) {
					newState.push(action.data[i]);
				}
			}

			return newState;
		case REMOVE_FAVORITE:
			return state.filter((video) => video.id !== action.data);
		default:
			return state;
	}
};

function videoIsInArray(array, videoId) {
	let isInArray = false;

	for(let i = 0; i < array.length; i++) {
		if(array[i].id === videoId) {
			isInArray = true;
			break;
		}
	}

	return isInArray;
}

export { videoIsInArray };
