import React, { PropTypes } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';

const ThumbnailList = ({ title, thumbnails, onClick }) => {
	const listStyle = {
		marginTop: '5px',
		padding: 0,
		textAlign: 'left'
	};

	const itemStyle = {
		display: 'inline-block',
		listStyle: 'none',
		textAlign: 'left'
	};

	const titleStyle = {
		fontSize: '15px',
		fontWeight: 500,
		marginBottom: 0,
		paddingLeft: '8px',
		textAlign: 'left'
	};

	const thumbnailList = thumbnails.map((thumbnail) => (
		<li
			style={itemStyle}
			key={thumbnail.id}>
			<Thumbnail
				id={thumbnail.id}
				img={thumbnail.img}
				title={thumbnail.title}
				author={thumbnail.author}
				onClick={onClick} />
		</li>
	));

	return (
		<div>
			<h1 style={titleStyle}>{title}</h1>
			<ul style={listStyle}>
				{thumbnailList}
			</ul>
		</div>
	);
};

ThumbnailList.propTypes = {
	title: PropTypes.string.isRequired,
	thumbnails: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired
	})),
	onClick: PropTypes.func.isRequired
};

export default ThumbnailList;
