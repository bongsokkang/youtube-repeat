import reducer from './CurrentVideo';

describe('CurrentVideo reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			id: '',
			img: '',
			title: '',
			author: '',
			videoLength: 0
		});
	});

	it('should handle ADD_CURRENT_VIDEO', () => {
		const action = {
			type: 'ADD_CURRENT_VIDEO',
			data: {
				id: 'id',
				img: 'img',
				title: 'title',
				author: 'author',
				videoLength: 60
			}
		};

		expect(reducer(undefined, action)).toEqual({
			id: 'id',
			img: 'img',
			title: 'title',
			author: 'author',
			videoLength: 60
		});
	});

	it('should handle ADD_CURRENT_VIDEO and replace existing state', () => {
		const action = {
			type: 'ADD_CURRENT_VIDEO',
			data: {
				id: 'id',
				img: 'img',
				title: 'title',
				author: 'author',
				videoLength: 60
			}
		};
		const initialState = {
			id: 'oldId',
			img: 'oldImg',
			title: 'oldTitle',
			author: 'oldAuthor',
			videoLength: 30
		};

		expect(reducer(initialState, action)).toEqual({
			id: 'id',
			img: 'img',
			title: 'title',
			author: 'author',
			videoLength: 60
		});
	});

	it('should handle ADD_CURRENT_VIDEO with missing data in action', () => {
		const initialState = {
			id: 'oldId',
			img: 'oldImg',
			title: 'oldTitle',
			author: 'oldAuthor',
			videoLength: 60
		};
		const action = {
			type: 'ADD_CURRENT_VIDEO',
			data: {
				id: 'newId'
			}
		};

		expect(reducer(initialState, action)).toEqual({
			id: 'newId',
			img: 'oldImg',
			title: 'oldTitle',
			author: 'oldAuthor',
			videoLength: 60
		});
	});

	it('should handle ADD_VIDEO_LENGTH', () => {
		const initialState = {
			id: 'oldId',
			img: 'oldImg',
			title: 'oldTitle',
			author: 'oldAuthor',
			videoLength: 60
		};
		const action = {
			type: 'ADD_VIDEO_LENGTH',
			data: 30
		};

		expect(reducer(initialState, action)).toEqual({
			id: 'oldId',
			img: 'oldImg',
			title: 'oldTitle',
			author: 'oldAuthor',
			videoLength: 30000
		});
	});
});
