export const usersCommand = (msg) => {
	const members = msg.guild.members;
	members.cache.each((member) => {
		// DO something better here.
		console.log(
			member.user.username + ': is ' + member.user.presence.status
		);
	});
};
