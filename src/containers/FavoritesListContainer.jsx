import React from 'react';
import { connect } from 'react-redux';
import Storage from '../utility/Storage';
import { addCurrentVideo, addFavorites } from '../actions/Actions';
import FavoritesList from '../components/FavoritesList/FavoritesList';

const mapStateToProps = (state) => {
	return {
		thumbnails: state.favorites
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFavorites: (favorites) => {
			dispatch(addFavorites(favorites));
		},
		onClick: (videoId) => {
			dispatch(addCurrentVideo(videoId));
		}
	};
};

class FavoritesListContainer extends React.Component {
	componentDidMount() {
		this.props.addFavorites(Storage.getFavorites() || []);
	}

	render() {
		const { thumbnails, onClick } = this.props;

		const containerStyle = {
			left: '0',
			position: 'absolute',
			top: '570px',
			width: '670px'
		};

		return (
			<div style={containerStyle}>
				<FavoritesList
					thumbnails={thumbnails}
					onClick={onClick} />
			</div>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavoritesListContainer);
