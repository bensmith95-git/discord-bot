import Discord from 'discord.js';

export const usersCommand = (msg) => {
	const embed = new Discord.MessageEmbed()
		.setTitle("What's everyone up to? 🧐")
		.setColor('#ffcc33');

	const members = msg.guild.members;
	members.cache.each((member) => {
		let userActivity = '';
		if (
			member.user.presence.status !== 'offline' &&
			!member.user.bot
			// && member.user.bot === 'false'
		) {
			userActivity =
				member.user.presence.activities.length === 0
					? 'Literally doing nothing'
					: member.user.presence.activities[0].state;
			embed.addField(member.user.username, `${userActivity}`);
		}
	});
	msg.channel.send(embed);
};
