import Discord from 'discord.js';

export const voteCommand = async (msg, question) => {
	const embed = new Discord.MessageEmbed();
	const reactions = [];
	const lads = ['ben', 'damian', 'rachit', 'yoran'];
	const title = question.join(' ');
	try {
		for (let lad in lads) {
			let reaction = msg.guild.emojis.cache.find(
				(emoji) => emoji.name === lads[lad]
			);
			reactions.push(reaction.id);
		}

		embed.setTitle(title);

		let message = await msg.channel.send(embed);
		for (let reaction in reactions) {
			message.react(reactions[reaction]);
		}
	} catch (error) {
		console.log(error);
	}
};
