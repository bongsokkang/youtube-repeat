import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer';
import VideoPlayerContainer from './containers/VideoPlayerContainer';
import SearchResultListContainer from './containers/SearchResultListContainer';

class App extends Component {
	render() {
		return (
			<div>
				<HeaderContainer />
				<VideoPlayerContainer />
				<SearchResultListContainer />
			</div>
		);
	}
}

export default App;
