import { connect } from 'react-redux';
import { getSearchResults } from '../actions/Actions';
import Header from '../components/Header/Header';

const mapDispatchToProps = (dispatch) => {
	return {
		searchVideo: (searchTerm) => {
			dispatch(getSearchResults(searchTerm));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Header);
