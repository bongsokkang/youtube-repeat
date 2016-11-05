import { combineReducers } from 'redux';
import currentVideo from './CurrentVideo';
import searchResults from './SearchResults';
import favorites from './Favorites';

export default combineReducers({
	currentVideo,
	searchResults,
	favorites,
});
