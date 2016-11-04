import React, { PropTypes } from 'react';

const Thumbnail = ({ id, img, title, author, onClick }) => {
	const containerStyle = {
		backgroundColor: 'white',
		margin: '8px',
		overflow: 'hidden',
		width: '300px'
	};

	const imgStyle = {
		height: '168px',
		width: '300px'
	};

	const titleStyle = {
		color: '#167ac6',
		fontSize: '13px',
		fontWeight: '500',
		marginTop: 0,
		marginBottom: 0,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		width: '300px'
	};

	const authorStyle = {
		color: '#767676',
		fontSize: '11px',
		fontWeight: '400',
		marginTop: '3px',
	};

	return (
		<div
			style={containerStyle}
			onClick={() => { onClick(id) }}>
			<img
				style={imgStyle}
				src={img}
				alt={`"${title}" by ${author}`} />
			<h1 style={titleStyle}>{title}</h1>
			<h2 style={authorStyle}>{author}</h2>
		</div>
	);
};

Thumbnail.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Thumbnail;
