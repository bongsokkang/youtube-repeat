import { connect } from 'react-redux';
import { addCurrentVideo } from '../actions/Actions';
import SearchResultList from '../components/SearchResultList/SearchResultList';

const mapStateToProps = (state) => {
	return {
		thumbnails: state.searchResults
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (videoId) => {
			dispatch(addCurrentVideo(videoId));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResultList);
