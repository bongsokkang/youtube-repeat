import {
	addSearchResults,
	addCurrentVideo,
	addFavorites
} from './Actions';

describe('Action Creators', () => {
	test('addSearchResults() should create action with appropriate type', () => {
		expect(addSearchResults('foo')).toEqual({
			type: 'ADD_SEARCH_RESULTS',
			data: 'foo'
		});
	});

	test('addCurrentVideo() should create action with appropriate type', () => {
		expect(addCurrentVideo('foo')).toEqual({
			type: 'ADD_CURRENT_VIDEO',
			data: 'foo'
		});
	});

	test('addFavorites() should create action with appropriate type', () => {
		expect(addFavorites('foo')).toEqual({
			type: 'ADD_FAVORITES',
			data: 'foo'
		});
	});
});
