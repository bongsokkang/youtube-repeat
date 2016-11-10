import React, { PropTypes } from 'react';
import Video from '../Video/Video';
import TimeSlider from '../TimeSlider/TimeSlider';
import LikeButtonContainer from '../../containers/LikeButtonContainer';

const VideoPlayer = (props) => {
	const { videoLength, onSliderChange } = props;

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

	return (
		<div style={containerStyle}>
			<Video />
			<TimeSlider
				videoLength={videoLength}
				onSliderChange={onSliderChange} />
			<div style={likeButtonStyle}>
				<LikeButtonContainer />
			</div>
		</div>
	);
};

VideoPlayer.propTypes = {
	videoLength: PropTypes.number.isRequired,
	onSliderChange: PropTypes.func.isRequired
};

export default VideoPlayer;
