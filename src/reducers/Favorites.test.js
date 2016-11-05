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

	it('should handle ADD_FAVORITES and with existing state', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: ['b']
		};
		expect(reducer(['a'], action)).toEqual(['a', 'b']);
	});

	it('should handle REMOVE_FAVORITE when video is present', () => {
		const action = {
			type: 'REMOVE_FAVORITE',
			data: 'abc'
		};
		const initialState = [
			{ id: 'abc', title: 'foo' },
			{ id: 'def', title: 'bar' }
		];
		const expectedState = [
			{ id: 'def', title: 'bar' }
		];
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('should handle REMOVE_FAVORITE when video is not present', () => {
		const action = {
			type: 'REMOVE_FAVORITE',
			data: 'xyz'
		};
		const initialState = [
			{ id: 'abc', title: 'foo' },
			{ id: 'def', title: 'bar' }
		];
		expect(reducer(initialState, action)).toEqual(initialState);
	});
});
