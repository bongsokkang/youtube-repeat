import React from 'react';
import { shallow } from 'enzyme';
import VideoPlayer from './VideoPlayer';
import Video from '../Video/Video';
import TimeSlider from '../TimeSlider/TimeSlider';

describe('VideoPlayer', () => {
	it('should render a Video component', () => {
		const wrapper = shallow(
			<VideoPlayer
				videoLength={123456}
				onSliderChange={() => {}} />
		);

		const video = (
			<Video />
		);

		expect(wrapper.contains(video)).toEqual(true);
	});

	it('should render a TimeSlider component', () => {
		const cb = () => {};
		const wrapper = shallow(
			<VideoPlayer
				videoLength={123456}
				onSliderChange={cb} />
		);

		const slider = (
			<TimeSlider
				videoLength={123456}
				onSliderChange={cb} />
		);

		expect(wrapper.contains(slider)).toEqual(true);
	});
});
