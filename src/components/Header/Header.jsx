import React, { PropTypes } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Logo from './youtube.jpg';

const Header = ({ searchVideo }) => {
	const containerStyle = {
		alignItems: 'center',
		borderBottom: '1px solid #e8e8e8',
		display: 'flex',
		height: '50px',
		padding: '8px 0px 8px 15px'
	};

	const titleStyle = {
		fontSize: '21px',
		fontWeight: 500,
		height: '100%',
		margin: '0 30px 0 0',
		position: 'relative',
		top: '-10px'
	};

	const logoStyle = {
		height: '100%',
		position: 'relative',
		top: '10px'
	};

	const hiddenTextStyle = {
		left: '-999999px',
		position: 'absolute'
	};

	return (
		<div style={containerStyle}>
			<h1 style={titleStyle}>
				<img src={Logo} alt="YouTube" style={logoStyle} />
				<span style={hiddenTextStyle}>YouTube</span> Repeat
			</h1>
			<SearchBar onSearch={searchVideo} />
		</div>
	);
};

Header.propTypes = {
	searchVideo: PropTypes.func.isRequired
};

export default Header;
