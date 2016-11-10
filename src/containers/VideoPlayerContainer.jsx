import React from 'react';
import { connect } from 'react-redux';
import { addVideoLength } from '../actions/Actions';
import YoutubePlayer from '../utility/YoutubePlayer';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const mapStateToProps = (state) => {
	return {
		videoId: state.currentVideo.id,
		videoLength: state.currentVideo.videoLength
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSliderChange: (start, end) => {
			YoutubePlayer.updateLoopTime(start, end);
		},
		onVideoLoad: (videoLength) => {
			dispatch(addVideoLength(videoLength));
		}
	};
};

class VideoContainer extends React.Component {
	componentDidMount() {
		YoutubePlayer.loadClient();
	}

	componentDidUpdate() {
		if(this.props.videoId !== '') {
			YoutubePlayer.loadVideo(this.props.videoId, (videoLength) => {
				this.props.onVideoLoad(videoLength);
			});
		}
	}

	render() {
		return (
			<VideoPlayer
				{...this.props} />
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VideoContainer);
