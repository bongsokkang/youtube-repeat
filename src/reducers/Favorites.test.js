import React from 'react';
import reducer from './Favorites';

describe('Favorites Reducer', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {})).toEqual([]);
	});

	it('should handle ADD_FAVORITES', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: ['a']
		};
		expect(reducer(undefined, action)).toEqual(['a']);
	});

	it('should handle ADD_FAVORITES and replace existing state', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: ['b']
		};
		expect(reducer(['a'], action)).toEqual(['b']);
	});
});
