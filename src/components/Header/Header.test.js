import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import SearchBar from '../SearchBar/SearchBar';

describe('Header', () => {
	it('should render a title and search bar', () => {
		const wrapper = shallow(
			<Header searchVideo={() => {}} />
		);

		expect(wrapper.find('h1').text()).toEqual('YouTube Repeat');
		expect(wrapper.find('SearchBar').length).toEqual(1);
	});

	it('should pass searchVideo prop to search bar', () => {
		const cb = () => {};
		const wrapper = shallow(
			<Header searchVideo={cb} />
		);
		const searchBar = (
			<SearchBar onSearch={cb} />
		);

		expect(wrapper.contains(searchBar)).toEqual(true);
	});
});
