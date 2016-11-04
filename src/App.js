import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer';
import VideoPlayerContainer from './containers/VideoPlayerContainer';
import SearchResultListContainer from './containers/SearchResultListContainer';
import FavoritesListContainer from './containers/FavoritesListContainer';
import LikeButton from './components/LikeButton/LikeButton';

class App extends Component {
	render() {
		const likeVideo = ({id, title, author, img }) => {
			console.log(id, title, author, img);
		};
		const dislikeVideo = (id) => console.log(id);

		return (
			<div>
				<LikeButton
					id={'abc'}
					title={'Title'}
					author={'Author'}
					img={'img'}
					likeVideo={likeVideo}
					dislikeVideo={dislikeVideo} />
			</div>
			/*
				<HeaderContainer />
				<VideoPlayerContainer />
				<SearchResultListContainer />
				<FavoritesListContainer />
			*/
		);
	}
}

export default App;
