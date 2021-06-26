import Discord from 'discord.js';
import {} from 'dotenv/config';
import fetch from 'node-fetch';

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
	console.log('🤖✅');
});

const randomIndex = (array) => {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
};

const replies = ['Hello there!', 'Hi', "What's up?"];

client.on('message', async (msg) => {
	if (msg.channel.id === process.env.GENERAL_CHANNEL_ID) {
		let tokens = msg.content.split(' ');

		if (tokens[0].toLowerCase() === '!hello') {
			msg.channel.send(randomIndex(replies));
		} else if (tokens[0] == '!gif') {
			let searchTerm = 'robot';
			if (tokens.length > 1) {
				searchTerm = tokens.slice(1, tokens.length).join(' ');
			}

			let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_TOKEN}&q=${searchTerm}&limit=5&rating=g`;
			let response = await fetch(url);
			let json = await response.json();

			msg.channel.send("here's a gif!");
			msg.channel.send(randomIndex(json.data).url);
		}
	}
});
