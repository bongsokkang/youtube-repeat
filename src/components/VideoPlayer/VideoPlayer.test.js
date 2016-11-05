import React from 'react';
import { shallow } from 'enzyme';
import VideoPlayer from './VideoPlayer';
import Video from '../Video/Video';
import TimeSlider from '../TimeSlider/TimeSlider';

describe('VideoPlayer', () => {
	it('should render a Video component', () => {
		const wrapper = shallow(
			<VideoPlayer
				videoId="abc"
				videoLength={123456}
				onSliderChange={() => {}}
				title="title"
				author="author"
				img="img"
				likeVideo={() => {}}
				dislikeVideo={() => {}} />
		);

		const video = (
			<Video videoId="abc" />
		);

		expect(wrapper.contains(video)).toEqual(true);
	});

	it('should render a TimeSlider component', () => {
		const cb = () => {};
		const wrapper = shallow(
			<VideoPlayer
				videoId="abc"
				videoLength={123456}
				onSliderChange={cb}
				title="title"
				author="author"
				img="img"
				likeVideo={() => {}}
				dislikeVideo={() => {}} />
		);

		const slider = (
			<TimeSlider
				videoLength={123456}
				onSliderChange={cb} />
		);

		expect(wrapper.contains(slider)).toEqual(true);
	});

	it('should render a LikeButton', () => {
		const wrapper = shallow(
			<VideoPlayer
				videoId="abc"
				videoLength={123456}
				onSliderChange={() => {}}
				title="title"
				author="author"
				img="img"
				likeVideo={() => {}}
				dislikeVideo={() => {}} />
		);

		expect(wrapper.find('LikeButton').length).toEqual(1);
	});
});
