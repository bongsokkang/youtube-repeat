import React, { PropTypes } from 'react';

class LikeButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = { liked: false };

		this.toggleLike = this.toggleLike.bind(this);
		this.likeVideo = this.likeVideo.bind(this);
		this.dislikeVideo = this.dislikeVideo.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.id !== this.props.id) {
			this.setState({ liked: false });
		}
	}

	toggleLike() {
		if(!this.props.id) return;

		if(this.state.liked) {
			this.dislikeVideo();
		} else {
			this.likeVideo();
		}

		this.setState({ liked: !this.state.liked });
	}

	likeVideo() {
		const { id, img, title, author } = this.props;
		this.props.likeVideo({
			id,
			img,
			title,
			author
		});
	}

	dislikeVideo() {
		const { id } = this.props;
		this.props.dislikeVideo(id);
	}

	render() {
		const containerStyle = {
			color: this.state.liked ? 'red' : 'gray',
			cursor: 'pointer',
			fontSize: '25px',
			userSelect: 'none'
		};

		return (
			<div
				style={containerStyle}
				onClick={this.toggleLike}>
				<span>
					♥
				</span>
			</div>
		);
	}
};

LikeButton.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	likeVideo: PropTypes.func.isRequired,
	dislikeVideo: PropTypes.func.isRequired
};

export default LikeButton;
