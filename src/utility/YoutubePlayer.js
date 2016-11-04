const youtubePlayer = (function() {
	let player;

	let callback;

	let startTime = 0; // when loop will start playing
	let endTime = 0; // when loop will stop playing
	let currentVideoId;

	const loadClient = () => {
		window.onYouTubeIframeAPIReady = () => {
			player = new YT.Player('player', { // eslint-disable-line no-undef
				height: '390',
				width: '640'
			});

			player.addEventListener('onStateChange', handleVideo);
		};

		loadIframeAPIScript();
	};

	function handleVideo(e) {
		if(videoHasEnded(e)) {
			loadVideo();
		} else if(videoStartedPlaying(e)) {
			callback(player.getDuration());
		}
	};

	function videoHasEnded(e) {
		return e.data === 0;
	}

	function videoStartedPlaying(e) {
		return e.data === 1;
	}

	function loadIframeAPIScript() {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	};

	function loadVideo(videoId, cb) {
		if(!player) {
			throw new Error('YoutubePlayer: call loadClient first');
		}

		if(newVideoLoaded(videoId)) {
			currentVideoId = videoId;
			startTime = 0;
			endTime = 0;
		}

		player.loadVideoById(getVideoPlayerOptions());

		if(cb) {
			callback = cb;
		}
	};

	function newVideoLoaded(videoId) {
		return videoId && (videoId !== currentVideoId);
	}

	function getVideoPlayerOptions() {
		const options = {
			videoId: currentVideoId,
			startSeconds: startTime
		};

		if(endTime !== 0) {
			options.endSeconds = endTime;
		}

		return options;
	}

	const updateLoopTime = (start, end) => {
		startTime = (start / 100) * player.getDuration();
		endTime = (end / 100) * player.getDuration();
	};

	return {
		loadClient,
		loadVideo,
		updateLoopTime
	};
})();

export default youtubePlayer;
