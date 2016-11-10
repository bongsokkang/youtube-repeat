import { connect } from 'react-redux';
import {
	addFavorites,
	removeFavorite
} from '../actions/Actions';
import LikeButton from '../components/LikeButton/LikeButton';

const mapStateToProps = (state) => {
	return {
		id: state.currentVideo.id,
		title: state.currentVideo.title,
		author: state.currentVideo.author,
		img: state.currentVideo.img,
		isLiked: state.favorites.filter(favorite => favorite.id === state.currentVideo.id).length > 0
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		likeVideo: (video) => {
			dispatch(addFavorites(video));
		},
		dislikeVideo: (videoId) => {
			dispatch(removeFavorite(videoId));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LikeButton);
