const Storage = (function() {
	const KEY = 'favorites';

	const getFavorites = () => {
		return JSON.parse(localStorage.getItem(KEY));
	};

	const updateFavorites = (favorites) => {
		localStorage.setItem(KEY, JSON.stringify(favorites));
	};

	return {
		getFavorites,
		updateFavorites
	};
})();

export default Storage;
