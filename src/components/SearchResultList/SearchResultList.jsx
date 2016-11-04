import React, { PropTypes } from 'react';
import ThumbnailList from '../ThumbnailList/ThumbnailList';

const SearchResultList = ({ thumbnails, onClick }) => {
	const containerStyle = {
		background: 'white',
		display: 'inline-block',
		height: '100vh',
		overflow: 'scroll',
		marginLeft: '20px',
		paddingLeft: '10px',
		width: '650px'
	};

	const title = thumbnails.length > 0 ?
		`Search Results (${thumbnails.length} results)` :
		`No search results`;

	return (
		<div style={containerStyle}>
			<ThumbnailList
				title={title}
				thumbnails={thumbnails}
				onClick={onClick} />
		</div>
	);
};

SearchResultList.propTypes = {
	thumbnails: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired
	})),
	onClick: PropTypes.func.isRequired
};

export default SearchResultList;
