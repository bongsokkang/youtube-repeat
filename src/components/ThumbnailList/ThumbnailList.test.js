import React from 'react';
import { shallow } from 'enzyme';
import ThumbnailList from './ThumbnailList';
import Thumbnail from '../Thumbnail/Thumbnail';

const thumbnailList = [
	{ id: '123', img: 'dog.jpg', title: 'Dog', author: 'DogOwner' },
	{ id: '124', img: 'cat.jpg', title: 'Cat', author: 'CatOwner' },
	{ id: '125', img: 'rabbit.jpg', title: 'Rabbit', author: 'RabbitOwner' }
];

describe('ThumbnailList', () => {
	it('should render a title', () => {
		const wrapper = shallow(
			<ThumbnailList
				title="Animals"
				thumbnails={thumbnailList}
				onClick={() => {}} />
		);

		const title = wrapper.find('h1');
		expect(title.length).toEqual(1);
		expect(title.text()).toEqual('Animals');
	});

	it('should render a component for each Thumbnail', () => {
		const wrapper = shallow(
			<ThumbnailList
				title="Animals"
				thumbnails={thumbnailList}
				onClick={() => {}} />
		);

		expect(wrapper.find('Thumbnail').length).toEqual(3);
	});

	it('should render an appropriate Thumbnail component with an onClick handler', () => {
		const cb = () => {};
		const wrapper = shallow(
			<ThumbnailList
				title="Animals"
				thumbnails={thumbnailList}
				onClick={cb} />
		);

		const thumbnail = (
			<Thumbnail
				id="123"
				img="dog.jpg"
				title="Dog"
				author="DogOwner"
				onClick={cb} />
		);

		expect(wrapper.contains(thumbnail)).toEqual(true);
	});
});
