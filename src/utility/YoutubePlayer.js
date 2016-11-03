const youtubePlayer = (function() {
	let player;

	const loadClient = () => {
		window.onYouTubeIframeAPIReady = () => {
			player = new YT.Player('player', {
				height: '390',
				width: '640'
			});

			player.addEventListener('onStateChange', loopSong);
		};

		loadIframeAPIScript();
	};

	const loopSong = (e) => {
		const videoHasEnded = (e.data === 0);

		if(videoHasEnded) {
			player.seekTo(0, true);
			player.playVideo();
		}
	};

	const loadIframeAPIScript = () => {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	};

	const loadVideo = (videoId) => {
		if(player) {
			player.loadVideoById({
				videoId: videoId
			});
			player.playVideo();
		}
	};

	return {
		loadClient,
		loadVideo
	};
})();

export default youtubePlayer;
