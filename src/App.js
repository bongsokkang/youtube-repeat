import React, { Component } from 'react';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import ThumbnailList from './components/ThumbnailList/ThumbnailList';
import SearchResultList from './components/SearchResultList/SearchResultList';

class App extends Component {
	render() {
		const img = 'https://googleblog.blogspot.com/media/yoshka.jpg';
		const thumbnailList = [
			{ id: 'abc123', img: img, title: 'Dog', author: 'Google' },
			{ id: 'abc124', img: img, title: 'Cat', author: 'Google' },
			{ id: 'abc125', img: img, title: 'Rabbit', author: 'Google' },
			{ id: 'cbc123', img: img, title: 'Dog', author: 'Google' },
			{ id: 'cbc124', img: img, title: 'Cat', author: 'Google' },
			{ id: 'cbc125', img: img, title: 'Rabbit', author: 'Google' },
			{ id: 'dbc123', img: img, title: 'Dog', author: 'Google' },
			{ id: 'dbc124', img: img, title: 'Cat', author: 'Google' },
			{ id: 'dbc125', img: img, title: 'Rabbit', author: 'Google' }
		];

		const printSlider = (start, end) => console.log(`${start}, ${end}`);

		return (
			<div>
				<Header searchVideo={(text) => console.log(text)} />
				<VideoPlayer
					videoId="abc"
					videoLength={602100}
					onSliderChange={printSlider} />
				<SearchResultList
					thumbnails={thumbnailList}
					onClick={(id) => console.log(id)} />
			</div>
		);
	}
}

export default App;
