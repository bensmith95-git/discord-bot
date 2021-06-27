import fetch from 'node-fetch';

export const insultCommand = async (msg, query) => {
	let url = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
	let target = query.length === 0 ? `<@${msg.author.id}>` : query[0];

	try {
		let response = await fetch(url);
		let json = await response.json();

		msg.channel.send(`${target}. ${json.insult}`);
	} catch (error) {
		console.log(error);
	}
};
