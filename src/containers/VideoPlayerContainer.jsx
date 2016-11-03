import React from 'react';
import { connect } from 'react-redux';
import YoutubePlayer from '../utility/YoutubePlayer';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const mapStateToProps = (state) => {
	return {
		videoId: state.videoId
	};
};

class VideoContainer extends React.Component {
	componentDidMount() {
		YoutubePlayer.loadClient();
	}

	componentDidUpdate() {
		if(this.props.videoId !== '') {
			YoutubePlayer.loadVideo(this.props.videoId);
		}
	}

	render() {
		const cb = (start, end) => console.log(`${start}, ${end}`);
		return (
			<VideoPlayer
				videoId={this.props.videoId}
				videoLength={602100}
				onSliderChange={cb} />
		);
	}
};

export default connect(
	mapStateToProps
)(VideoContainer);
