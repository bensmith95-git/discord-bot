export const clearCommand = async (msg, num) => {
	const channel = msg.channel;
	const number =
		num.length === 0 ? 10 : parseInt(num) > 100 ? 100 : parseInt(num);

	try {
		await channel.bulkDelete(number);
		let message = await channel.send(`Deleted ${number} messages`);
		await message.delete({ timeout: 3000 });
	} catch (error) {
		console.log(error);
	}
};
