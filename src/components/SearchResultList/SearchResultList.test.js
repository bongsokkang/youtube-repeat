import React from 'react';
import { shallow } from 'enzyme';
import SearchResultList from './SearchResultList';
import ThumbnailList from '../ThumbnailList/ThumbnailList';

describe('SearchResultList', () => {
	it('should render a ThumbnailList with correct title showing thumbnails', () => {
		const thumbnails = [
			{ id: 'abc123', img: 'dog.jpg', title: 'Dog', author: 'Google' },
			{ id: 'abc124', img: 'dog.jpg', title: 'Dog', author: 'Google' }
		];
		const cb = () => {};

		const wrapper = shallow(
			<SearchResultList
				thumbnails={thumbnails}
				onClick={cb} />
		);
		const list = (
			<ThumbnailList
				title="Search Results (2 results)"
				thumbnails={thumbnails}
				onClick={cb} />
		);

		expect(wrapper.contains(list)).toEqual(true);
	});

	it('should render a ThumbnailList with correct title showing no thumbnails', () => {
		const cb = () => {};
		const wrapper = shallow(
			<SearchResultList
				thumbnails={[]}
				onClick={cb} />
		);
		const list = (
			<ThumbnailList
				title="No search results"
				thumbnails={[]}
				onClick={cb} />
		);

		expect(wrapper.contains(list)).toEqual(true);
	});
});
