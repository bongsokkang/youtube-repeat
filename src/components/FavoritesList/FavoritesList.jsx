import React, { PropTypes } from 'react';
import ThumbnailList from '../ThumbnailList/ThumbnailList';

const FavoritesList = ({ thumbnails, onClick }) => {
	const containerStyle = {
		background: 'white',
		padding: '5px 0 0 10px'
	};

	return (
		<div style={containerStyle}>
			<ThumbnailList
				title="Favorites"
				thumbnails={thumbnails}
				onClick={onClick} />
		</div>
	);
};

FavoritesList.propTypes = {
	thumbnails: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired
	})),
	onClick: PropTypes.func.isRequired
}

export default FavoritesList;
