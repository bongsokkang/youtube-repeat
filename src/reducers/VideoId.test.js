import reducer from './VideoId';

describe('VideoId reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual('');
	});

	it('should handle ADD_CURRENT_VIDEO', () => {
		const action = {
			type: 'ADD_CURRENT_VIDEO',
			data: 'a'
		};
		expect(reducer(undefined, action)).toEqual('a');
	});

	it('should handle ADD_CURRENT_VIDEO and replace existing state', () => {
		const action = {
			type: 'ADD_CURRENT_VIDEO',
			data: 'b'
		};
		expect(reducer('a', action)).toEqual('b');
	});
});
