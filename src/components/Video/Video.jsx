import React, { PropTypes } from 'react';

class Video extends React.Component {
	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		const containerStyle = {
			height: '390px',
			width: '640px'
		};

		return (
			<div style={containerStyle}>
				<div id="player"></div>
			</div>
		);
	}
};

Video.propTypes = {
	videoId: PropTypes.string.isRequired
};

Video.defaultProps = {
	videoId: ''
};

export default Video;
