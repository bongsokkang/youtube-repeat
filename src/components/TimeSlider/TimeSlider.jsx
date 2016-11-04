import React, { PropTypes } from 'react';
import Slider from 'rc-slider';
import Utility from '../../utility/Utility';
require('rc-slider/assets/index.css');

class TimeSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			start: 0,
			end: props.videoLength
		};

		this.onSliderChange = this.onSliderChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.videoLength !== 0) {
			this.setState({
				end: nextProps.videoLength
			});
		}
	}

	onSliderChange(values) {
		const { videoLength } = this.props;
		this.setState({
			start: Utility.percentOf(videoLength, values[0]),
			end: Utility.percentOf(videoLength, values[1])
		});

		this.props.onSliderChange(values[0], values[1]);
	}

	render() {
		const containerStyle = {
			marginLeft: '8px',
			marginTop: '8px',
			paddingTop: '17px',
			position: 'relative',
			width: '628px'
		};

		const startTimeStyle = {
			color: '#767676',
			fontSize: '13px',
			left: 0,
			position: 'absolute',
			top: 0
		};

		const endTimeStyle = {
			color: '#767676',
			fontSize: '13px',
			position: 'absolute',
			right: 0,
			top: 0
		};

		const descriptionStyle = {
			color: '#767676',
			fontSize: '11px',
			fontWeight: '400',
			fontStyle: 'italic',
			textAlign: 'center'
		};

		const startTime = Utility.milliToMins(this.state.start);
		const endTime = Utility.milliToMins(this.state.end);

		return (
			<div style={containerStyle}>
				<span style={startTimeStyle}>{startTime}</span>
				<Slider
					range
					allowCross={false}
					tipFormatter={() => 'Drag handle to set loop time of video'}
					defaultValue={[0, 100]}
					onChange={this.onSliderChange} />
				<span style={endTimeStyle}>{endTime}</span>
				<p style={descriptionStyle}>Set start and end of loop</p>
			</div>
		);
	}
};

TimeSlider.propTypes = {
	videoLength: PropTypes.number.isRequired,
	onSliderChange: PropTypes.func.isRequired
};

export default TimeSlider;
