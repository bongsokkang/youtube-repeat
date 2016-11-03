const youtubeData = (function() {
	const API_KEY = 'AIzaSyD5Qh12IFGDaMAlQALlA7ade4M8Sir8a5k';

	const loadClient = () => {
		const p1 = new Promise((resolve, reject) => {
			/* eslint-disable no-undef */
			gapi.load('client', function() {
				gapi.client.load('youtube', 'v3', function() {
					gapi.client.setApiKey(API_KEY);
					/* eslint-enable no-undef */
					resolve('Success');
				});
			});
		});

		return p1;
	};

	const search = (searchTerm) => {
		const request = gapi.client.youtube.search.list({ // eslint-disable-line no-undef
			part: 'snippet',
			q: searchTerm,
			type: 'video',
			maxResults: 20
		});

		const p1 = new Promise((resolve, reject) => {
			request.execute(function(response) {
				resolve(formatSearchResults(response));
			});
		});

		return p1;
	};

	function formatSearchResults(searchResult) {
		const searchResultArray = [];

		for(let i = 0; i < searchResult['items'].length; i++) {
			let currentSearch = searchResult['items'][i];

			let currentSearchItem = {
				id: currentSearch['id']['videoId'],
				title: currentSearch['snippet']['title'],
				author: currentSearch['snippet']['channelTitle'],
				img: currentSearch['snippet']['thumbnails']['medium']['url']
			};

			searchResultArray.push(currentSearchItem);
		}

		return searchResultArray;
	};

	return {
		loadClient,
		search
	};
})();

export default youtubeData;
