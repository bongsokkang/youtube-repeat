import React, { Component } from 'react';
import TimeSlider from './components/TimeSlider/TimeSlider';
import ThumbnailList from './components/ThumbnailList/ThumbnailList';

class App extends Component {
	render() {
		const img = 'https://googleblog.blogspot.com/media/yoshka.jpg';
		const thumbnailList = [
			{ id: 'abc123', img: img, title: 'Dog', author: 'Google' },
			{ id: 'abc124', img: img, title: 'Dog', author: 'Google' },
			{ id: 'abc125', img: img, title: 'Dog', author: 'Google' }
		];

		return (
			<div className="App">
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
