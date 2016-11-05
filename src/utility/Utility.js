const Utility = (function() {
	const milliToMins = (milli) => {
		const minutes = Math.floor(milli / 60000);
		const seconds = ((milli % 60000) / 1000).toFixed(0);

		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	const percentOf = (number, percent) => {
		return Math.floor((percent / 100) * number);
	}

	return {
		milliToMins,
		percentOf
	};
})();

export default Utility;
