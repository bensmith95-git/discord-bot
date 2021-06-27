import Discord from 'discord.js';
import fetch from 'node-fetch';

export const marvelCommand = async (msg, query) => {
	const character = query.join(' ');
	let url = `https://gateway.marvel.com/v1/public/characters?name=${character}&ts=1&apikey=${process.env.MARVEL_KEY}&hash=1a1ea2622389648a4139fe155acfb42d`;

	const embed = new Discord.MessageEmbed();

	try {
		let response = await fetch(url);
		let data = await response.json();
		const characterInfo = data.data.results[0];
		const thumbnailPath = `${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}`;

		embed
			.setTitle(characterInfo.name)
			.setDescription(characterInfo.description)
			.setColor('#ffcc33')
			.setThumbnail(thumbnailPath);

		msg.channel.send(embed);
	} catch (error) {
		console.log(error);
		msg.channel.send('Please specify a Marvel character!');
	}
};
