const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

app.use(logger('dev'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
