import reducer from './SearchResults';

describe('SearchResults reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual([]);
	});

	it('should handle ADD_SEARCH_RESULTS', () => {
		const action = {
			type: 'ADD_SEARCH_RESULTS',
			data: ['a']
		};
		expect(reducer(undefined, action)).toEqual(['a']);
	});

	it('should handle ADD_SEARCH_RESULTS and replace existing state', () => {
		const action = {
			type: 'ADD_SEARCH_RESULTS',
			data: ['b']
		};
		expect(reducer(['a'], action)).toEqual(['b']);
	});
});
