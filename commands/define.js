import Discord from 'discord.js';
import fetch from 'node-fetch';
import moment from 'moment';

export const defineCommand = async (msg, query) => {
	let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${query[0]}?key=${process.env.DICTIONARY_KEY}`;

	const embed = new Discord.MessageEmbed();

	try {
		let response = await fetch(url);
		let data = await response.json();
		let word = data[0];
		const synonyms = word.meta.syns.flat().join(', ');

		embed
			.setTitle(word.meta.id)
			.setDescription(word.shortdef)
			.setColor('#ffcc33')
			.addField('Synonyms', synonyms);

		msg.channel.send(embed);
	} catch (error) {
		console.log(error);
	}
};
