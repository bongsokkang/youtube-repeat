import React from 'react';
import { shallow } from 'enzyme';
import FavoritesList from './FavoritesList';
import ThumbnailList from '../ThumbnailList/ThumbnailList';

describe('FavoritesList', () => {
	it('should render a ThumbnailList with correct title', () => {
		const thumbnails = [
			{ id: 'abc123', img: 'dog.jpg', title: 'Dog', author: 'Google' }
		];
		const cb = () => {};

		const wrapper = shallow(
			<FavoritesList
				thumbnails={thumbnails}
				onClick={cb} />
		);
		const list = (
			<ThumbnailList
				title="Favorites"
				thumbnails={thumbnails}
				onClick={cb} />
		);

		expect(wrapper.contains(list)).toEqual(true);
	});
});
