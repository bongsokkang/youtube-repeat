const youtubePlayer = (function() {
	let player;
	let ENDED = 0;
	let PLAYING = 1;
	let callback;

	const loadClient = () => {
		window.onYouTubeIframeAPIReady = () => {
			player = new YT.Player('player', { // eslint-disable-line no-undef
				height: '390',
				width: '640'
			});

			player.addEventListener('onStateChange', loopSong);
		};

		loadIframeAPIScript();
	};

	function loopSong(e) {
		const videoHasEnded = (e.data === ENDED);
		if(videoHasEnded) {
			player.seekTo(0, true);
			player.playVideo();
		}

		const videoIsPlaying = (e.data === PLAYING);
		if(videoIsPlaying) {
			callback(player.getDuration());
		}
	};

	function loadIframeAPIScript() {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	};

	const loadVideo = (videoId, cb) => {
		if(player) {
			player.loadVideoById({
				videoId: videoId
			});
			player.playVideo();
		}
		callback = cb;
	};

	return {
		loadClient,
		loadVideo
	};
})();

export default youtubePlayer;
