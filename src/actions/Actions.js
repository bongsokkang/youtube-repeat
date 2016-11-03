export const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULTS';
export const ADD_CURRENT_VIDEO = 'ADD_CURRENT_VIDEO';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export function addSearchResults(searchResults) {
	return {
		type: ADD_SEARCH_RESULTS,
		data: searchResults
	};
};

export function addCurrentVideo(videoId) {
	return {
		type: ADD_CURRENT_VIDEO,
		data: videoId
	};
};

export function addFavorites(favorites) {
	return {
		type: ADD_FAVORITES,
		data: favorites
	};
};
