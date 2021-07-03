import Discord from 'discord.js';
import fetch from 'node-fetch';
import moment from 'moment';

export const mcuCommand = async (msg) => {
	let url = 'https://www.whenisthenextmcufilm.com/api';

	const embed = new Discord.MessageEmbed();

	try {
		let response = await fetch(url);
		let json = await response.json();

		const date = moment(json.release_date).format('DD/MM/YYYY');

		embed
			.setTitle(json.title)
			.setDescription(json.overview)
			.setImage(json.poster_url)
			.setColor('#ffcc33')
			.addFields(
				{ name: 'Release date:', value: date },
				{ name: 'Days until release:', value: json.days_until }
			);

		msg.channel.send(embed);
	} catch (error) {
		console.log(error);
	}
};
