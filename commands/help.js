import Discord from 'discord.js';
import { client } from '../bot.js';
import { commandDescriptions } from '../helpers/commandDescriptions.js';

commandDescriptions.sort((a, b) => {
	return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
});

export const helpCommand = (msg, tokens, commandList) => {
	const embed = new Discord.MessageEmbed()
		.setTitle('HeLp mE! 🤡')
		.setDescription("Here's the list of commands you can use:")
		.setThumbnail(client.user.avatarURL())
		.setColor('#ffcc33');

	for (var command in commandDescriptions) {
		if (commandList.includes(commandDescriptions[command].name))
			embed.addField(
				commandDescriptions[command].name,
				commandDescriptions[command].description
			);
	}

	msg.channel.send(embed);
};
