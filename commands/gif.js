import fetch from 'node-fetch';
import { randomIndex } from '../helpers/helpers.js';

export const gifCommand = async (msg, query) => {
	let searchTerm,
		url = '';

	if (query.length > 0) {
		searchTerm = query.join(' ');
		url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_TOKEN}&q=${searchTerm}&limit=10&rating=g`;
	} else {
		url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIF_TOKEN}&limit=10&rating=g`;
	}

	let response = await fetch(url);
	let json = await response.json();

	msg.channel.send("here's a gif!");
	msg.channel.send(randomIndex(json.data).url);
};
