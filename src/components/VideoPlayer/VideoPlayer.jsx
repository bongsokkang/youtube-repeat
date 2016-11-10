import React, { PropTypes } from 'react';
import Video from '../Video/Video';
import TimeSlider from '../TimeSlider/TimeSlider';
import LikeButton from '../LikeButton/LikeButton';

const VideoPlayer = (props) => {
	const { videoId, videoLength, title, author, img, isLiked } = props;
	const { onSliderChange, likeVideo, dislikeVideo } = props;

	const containerStyle = {
		backgroundColor: 'white',
		display: 'inline-block',
		float: 'left',
		padding: '12px 15px 20px 15px',
		position: 'relative'
	};

	const likeButtonStyle = {
		bottom: '5px',
		position: 'absolute',
		right: '11px'
	};
	console.log('rerendering the video player');

	return (
		<div style={containerStyle}>
			<Video videoId={videoId} />
			<TimeSlider
				videoLength={videoLength}
				onSliderChange={onSliderChange} />
			<div style={likeButtonStyle}>
				<LikeButton
					id={videoId}
					title={title}
					author={author}
					img={img}
					likeVideo={likeVideo}
					dislikeVideo={dislikeVideo}
					isLiked={isLiked} />
			</div>
		</div>
	);
};

VideoPlayer.propTypes = {
	videoId: PropTypes.string.isRequired,
	videoLength: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	onSliderChange: PropTypes.func.isRequired,
	likeVideo: PropTypes.func.isRequired,
	dislikeVideo: PropTypes.func.isRequired
};

export default VideoPlayer;
