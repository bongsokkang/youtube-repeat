import {
	addSearchResults,
	addCurrentVideo,
	addFavorites,
	getSearchResults,
	addVideoLength
} from './Actions';
import configureMockStore from 'redux-mock-store';

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

	test('addVideoLength() should create action with appropriate type', () => {
		expect(addVideoLength('foo')).toEqual({
			type: 'ADD_VIDEO_LENGTH',
			data: 'foo'
		});
	});

	test('creates ADD_SEARCH_RESULTS when Youtube search has completed', () => {
		mockYoutubeData();
		let cbInvoked = false;
		const cb = (result) => invoked = result;

		const expectedAction = [
			{ type: 'ADD_SEARCH_RESULTS', data: ['abc'] }
		];

		getSearchResults('abc')(cb).then((a) => {
			expect(invoked).toEqual(expectedAction);
		});
	});
});

function mockYoutubeData() {
	jest.mock('../utility/YoutubeData', () => {
		return {
			loadClient: jest.fn(() => {
				return new Promise((resolve) => {
					resolve('abc');
				});
			}),
			search: jest.fn(() => {
				return new Promise((resolve) => {
					resolve(['abc']);
				});
			})
		};
	});
}
