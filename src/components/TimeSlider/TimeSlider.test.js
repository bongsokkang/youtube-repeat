import React from 'react';
import { shallow } from 'enzyme';
import TimeSlider from './TimeSlider';

describe('TimeSlider', () => {
	it('should render a slider', () => {
		const wrapper = shallow(
			<TimeSlider
				videoLength={600000}
				onSliderChange={() => {}} />
		);

		expect(wrapper.find('Slider').length).toEqual(1);
	});

	it('should call props.onSliderChange() when slider is updated', () => {
		let cbInvoked = false;
		const cb = (min, max) => cbInvoked = `${min}, ${max}`;

		const wrapper = shallow(
			<TimeSlider
				videoLength={600000}
				onSliderChange={cb} />
		);

		const slider = wrapper.find('Slider');
		slider.simulate('change', [0, 100]);
		expect(cbInvoked).toEqual('0, 100');
	});

	it('should initially display the start and end time', () => {
		const wrapper = shallow(
			<TimeSlider
				videoLength={600000}
				onSliderChange={() => {}} />
		);

		const startTime = wrapper.find('span').at(0);
		const endTime = wrapper.find('span').at(1);

		expect(startTime.text()).toEqual('0:00');
		expect(endTime.text()).toEqual('10:00');
	});

	it('should update the start and end time when slider is updated', () => {
		const wrapper = shallow(
			<TimeSlider
				videoLength={600000}
				onSliderChange={() => {}} />
		);

		const slider = wrapper.find('Slider');
		slider.simulate('change', [10, 50]);

		const startTime = wrapper.find('span').at(0);
		const endTime = wrapper.find('span').at(1);

		expect(startTime.text()).toEqual('1:00');
		expect(endTime.text()).toEqual('5:00');
	});
});
