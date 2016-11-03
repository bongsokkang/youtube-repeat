import React from 'react';
import { shallow } from 'enzyme';
import SearchResultList from './SearchResultList';
import ThumbnailList from '../ThumbnailList/ThumbnailList';

describe('SearchResultList', () => {
	it('should render a ThumbnailList with correct title', () => {
		const thumbnails = [
			{ id: 'abc123', img: 'dog.jpg', title: 'Dog', author: 'Google' }
		];
		const cb = () => {};

		const wrapper = shallow(
			<SearchResultList
				thumbnails={thumbnails}
				onClick={cb} />
		);
		const list = (
			<ThumbnailList
				title="Search Results"
				thumbnails={thumbnails}
				onClick={cb} />
		);

		expect(wrapper.contains(list)).toEqual(true);
	});
});
