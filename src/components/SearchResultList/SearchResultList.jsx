import React from 'react';
import ThumbnailList from '../ThumbnailList/ThumbnailList';

const SearchResultList = ({ thumbnails, onClick }) => {
	const containerStyle = {
		background: 'white',
		float: 'right',
		height: '100vh',
		overflow: 'scroll',
		paddingLeft: '10px',
		width: '250px'
	};

	return (
		<div style={containerStyle}>
			<ThumbnailList
				title="Search Results"
				thumbnails={thumbnails}
				onClick={onClick} />
		</div>
	);
};


export default SearchResultList;
