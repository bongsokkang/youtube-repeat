import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from './Thumbnail';

describe('Thumbnail', () => {
	it('should render an img with src and alt', () => {
		const wrapper = shallow(
			<Thumbnail
				id="abc"
				img="puppy.jpg"
				title="Puppy"
				author="Owner"
				onClick={() => {}} />
		);

		const img = wrapper.find('img');
		expect(img.prop('src')).toEqual('puppy.jpg');
		expect(img.prop('alt')).toEqual('"Puppy" by Owner');
	});

	it('should render the title and author', () => {
		const wrapper = shallow(
			<Thumbnail
				id="abc"
				img="puppy.jpg"
				title="Puppy"
				author="Owner"
				onClick={() => {}} />
		);

		const title = wrapper.find('h1');
		expect(title.length).toEqual(1);
		expect(title.text()).toEqual('Puppy');

		const author = wrapper.find('h2');
		expect(author.length).toEqual(1);
		expect(author.text()).toEqual('Owner');
	});

	it('should run callback with video info when thumbnail is clicked', () => {
		let cbInvoked = false;
		const cb = (video) => cbInvoked = video;

		const wrapper = shallow(
			<Thumbnail
				id="abc"
				img="puppy.jpg"
				title="Puppy"
				author="Owner"
				onClick={cb} />
		);

		wrapper.simulate('click');
		expect(cbInvoked).toEqual({
			id: 'abc',
			img: 'puppy.jpg',
			title: 'Puppy',
			author: 'Owner'
		});
	});
});
