import React, { PropTypes } from 'react';

const Video = ({ videoId }) => {
	const containerStyle = {
		height: '390px',
		width: '640px'
	};

	return (
		<div style={containerStyle}>
			<div id="player"></div>
		</div>
	);
};

Video.propTypes = {
	videoId: PropTypes.string.isRequired
};

Video.defaultProps = {
	videoId: ''
};

export default Video;
