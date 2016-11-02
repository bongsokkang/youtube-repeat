import React, { Component } from 'react';
import TimeSlider from './components/TimeSlider/TimeSlider';
import ThumbnailList from './components/ThumbnailList/ThumbnailList';
import Header from './components/Header/Header';
import Video from './components/Video/Video';

class App extends Component {
	render() {
		const img = 'https://googleblog.blogspot.com/media/yoshka.jpg';
		const thumbnailList = [
			{ id: 'abc123', img: img, title: 'Dog', author: 'Google' },
			{ id: 'abc124', img: img, title: 'Dog', author: 'Google' },
			{ id: 'abc125', img: img, title: 'Dog', author: 'Google' }
		];

		return (
			<div>
				<Header searchVideo={(text) => console.log(text)} />
				<Video videoId="abc" />
				<TimeSlider
					videoLength={602100}
					onSliderChange={(start, end) => console.log(`${start}, ${end}`)} />

				<ThumbnailList
					title="Favorites"
					thumbnails={thumbnailList}
					onClick={(id) => console.log(id) } />
			</div>
		);
	}
}

export default App;
