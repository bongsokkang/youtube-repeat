import React from 'react';

const Video = () => {
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

export default Video;
