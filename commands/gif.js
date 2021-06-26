import fetch from 'node-fetch';
import { randomIndex } from '../helpers.js';

export const gifCommand = async (msg, query) => {
	let searchTerm = '';
	searchTerm = query.length >= 1 ? (searchTerm = query.join(' ')) : 'robot';

	let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_TOKEN}&q=${searchTerm}&limit=5&rating=g`;
	let response = await fetch(url);
	let json = await response.json();

	msg.channel.send("here's a gif!");
	msg.channel.send(randomIndex(json.data).url);
};
