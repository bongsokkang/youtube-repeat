import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
	it('should render a text box and button', () => {
		const wrapper = shallow(
			<SearchBar onSearch={() => {}} />
		);

		expect(wrapper.find('input[type="text"]').length).toEqual(1);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should call props.onSearch when button is clicked', () => {
		let cbInvoked = false;
		const cb = (text) => cbInvoked = text;
		const wrapper = shallow(
			<SearchBar onSearch={cb} />
		);

		const input = wrapper.find('input');
		input.simulate('change', { target: { value: 'hello world' } });

		const button = wrapper.find('button');
		button.simulate('click');

		expect(cbInvoked).toEqual('hello world');
	});

	it('should call props.onSearch when enter key is pressed inside text box', () => {
		let cbInvoked = false;
		const cb = (text) => cbInvoked = text;
		const wrapper = shallow(
			<SearchBar onSearch={cb} />
		);

		const input = wrapper.find('input');
		input.simulate('change', { target: { value: 'hello world' } });
		input.simulate('keyDown', { keyCode: 13 });

		expect(cbInvoked).toEqual('hello world');
	});
});
