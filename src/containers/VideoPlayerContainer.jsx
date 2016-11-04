import React from 'react';
import { connect } from 'react-redux';
import { addVideoLength } from '../actions/Actions';
import YoutubePlayer from '../utility/YoutubePlayer';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const mapStateToProps = (state) => {
	return {
		videoId: state.videoId,
		videoLength: state.videoLength
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
		const { videoId, videoLength, onSliderChange } = this.props;

		return (
			<VideoPlayer
				videoId={videoId}
				videoLength={videoLength}
				onSliderChange={onSliderChange} />
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VideoContainer);
