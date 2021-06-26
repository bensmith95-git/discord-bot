export const clearCommand = (msg, num) => {
	const channel = msg.channel;
	channel.bulkDelete(100).then(() => {
		channel
			.send('Deleted 10 messages')
			.then((message) => message.delete({ timeout: 3000 }));
	});
};
