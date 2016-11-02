import React, { PropTypes } from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { text: '' };

		this.ENTER_KEY = 13;
		this.handleChange = this.handleChange.bind(this);
		this.handleEnterPress = this.handleEnterPress.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	handleEnterPress(e) {
		if(e.keyCode === this.ENTER_KEY) {
			this.handleClick();
		}
	}

	handleClick() {
		this.handleSubmit();
	}

	handleSubmit() {
		this.props.onClick(this.state.text);
	}

	render() {
		const containerStyle = {
			height: '27px',
			marginTop: '8px'
		};

		const inputStyle = {
			border: '1px solid #d3d3d3',
			fontSize: '16px',
			height: '27px',
			padding: '2px 6px',
			width: '220px'
		};

		const buttonStyle = {
			backgroundColor: '#f8f8f8',
			border: '1px solid #d3d3d3',
			borderLeft: 'none',
			height: '27px',
			position: 'absolute'
		};

		return (
			<div style={containerStyle}>
				<input
					style={inputStyle}
					type="text"
					placeholder="Search for Video"
					value={this.state.text}
					onKeyDown={this.handleEnterPress}
					onChange={this.handleChange} />
				<button
					style={buttonStyle}
					onClick={this.handleClick}>
						Search
				</button>
			</div>
		);
	}
};

SearchBar.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default SearchBar;
