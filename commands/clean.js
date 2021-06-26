export const cleanCommand = async (msg) => {
	const channel = msg.channel;

	let messages = await channel.messages.fetch();

	let botMessages = messages.filter(
		(message) =>
			(message.author.bot === true &&
				!message.content.includes('https://giphy.com/gifs/')) ||
			message.content.charAt(0) === '!'
	);
	let numMessages = botMessages.size;
	await channel.bulkDelete(botMessages);
	let cleanToast = await channel.send(`Cleaned ${numMessages} messages`);
	await cleanToast.delete({ timeout: 3000 });
};
