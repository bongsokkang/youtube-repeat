import React from 'react';
import reducer, { videoIsInArray } from './Favorites';

describe('Favorites Reducer', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {})).toEqual([]);
	});

	it('should handle ADD_FAVORITES', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: [{ id: 'abc' }]
		};
		expect(reducer(undefined, action)).toEqual([{ id: 'abc' }]);
	});

	it('should handle ADD_FAVORITES and with existing state', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: [{ id: 'def' }]
		};
		expect(reducer([{ id: 'abc' }], action)).toEqual([{ id: 'abc' }, { id: 'def' }]);
	});

	it('should handle ADD_FAVORITES and not include duplicates', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: [{ id: 'abc' }]
		};
		expect(reducer([{ id: 'abc' }], action)).toEqual([{ id: 'abc' }]);
	});

	it('should handle ADD_FAVORITES and not include data without an ID', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: [{ id: '' }]
		};
		expect(reducer([{ id: 'abc' }], action)).toEqual([{ id: 'abc' }]);
	});

	it('should handle ADD_FAVORITES with non-array data', () => {
		const action = {
			type: 'ADD_FAVORITES',
			data: { id: 'def' }
		};
		expect(reducer([{ id: 'abc' }], action)).toEqual([{ id: 'abc' }, { id: 'def' }]);
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

describe('videoIsInArray', () => {
	it('should return true if ID exists in array', () => {
		const array = [
			{ id: 'abc' },
			{ id: 'def' }
		];

		expect(videoIsInArray(array, 'abc')).toEqual(true);
	});

	it('should return false if ID doesn\'t exist in array', () => {
		const array = [
			{ id: 'abc' },
			{ id: 'def' }
		];

		expect(videoIsInArray(array, 'xyz')).toEqual(false);
	});
});
