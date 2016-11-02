import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

describe('Video', () => {
	it('should render #player div', () => {
		const wrapper = shallow(
			<Video
				videoId="abc" />
		);

		expect(wrapper.find('#player').length).toEqual(1);
	});
});
