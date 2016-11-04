import reducer from './VideoLength';

describe('VideoLength reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(0);
	});

	it('should handle ADD_VIDEO_LENGTH', () => {
		const action = {
			type: 'ADD_VIDEO_LENGTH',
			data: 60
		};
		expect(reducer(undefined, action)).toEqual(60000);
	});

	it('should handle ADD_VIDEO_LENGTH and replace existing state', () => {
		const action = {
			type: 'ADD_VIDEO_LENGTH',
			data: 60
		};
		expect(reducer(0, action)).toEqual(60000);
	});
});
