import { combineReducers } from 'redux';
import videoId from './VideoId';
import searchResults from './SearchResults';
import favorites from './Favorites';

export default combineReducers({
	videoId,
	searchResults,
	favorites
});
