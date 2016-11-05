import youtubeData from '../utility/YoutubeData';

export const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULTS';
export const ADD_CURRENT_VIDEO = 'ADD_CURRENT_VIDEO';
export const ADD_VIDEO_LENGTH = 'ADD_VIDEO_LENGTH';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function addSearchResults(searchResults) {
	return {
		type: ADD_SEARCH_RESULTS,
		data: searchResults
	};
};

export function addCurrentVideo(currentVideo) {
	return {
		type: ADD_CURRENT_VIDEO,
		data: currentVideo
	};
};

export function addVideoLength(videoLength) {
	return {
		type: ADD_VIDEO_LENGTH,
		data: videoLength
	};
};

export function addFavorites(favorites) {
	return {
		type: ADD_FAVORITES,
		data: favorites
	};
};

export function removeFavorite(favorite) {
	return {
		type: REMOVE_FAVORITE,
		data: favorite
	};
};

export function getSearchResults(searchTerm) {
	return (dispatch) => {
		return youtubeData.loadClient()
			.then(() => {
				return youtubeData.search(searchTerm);
			})
			.then((searchResults) => {
				dispatch(addSearchResults(searchResults));
			});
	};
}
