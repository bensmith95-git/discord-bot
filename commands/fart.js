import path from 'path';
import { randomNumber } from '../helpers/helpers.js';

const __dirname = (() => {
	let x = path.dirname(decodeURI(new URL(import.meta.url).pathname));
	return path.resolve(process.platform == 'win32' ? x.substr(1) : x);
})();

export const fartCommand = async (msg, number) => {
	try {
		let voiceChannel = msg.member.voice.channel;
		let connection = await voiceChannel.join();
		const fartNumber =
			number.length > 0 && number[0] > 0 ? number[0] : randomNumber(1, 9);
		connection.play(
			path.join(__dirname, `../audio/fart_${fartNumber}.mp3`)
		);
		msg.channel.send('💨');
		setTimeout(() => {
			voiceChannel.leave();
		}, 3000);
	} catch (error) {
		console.log(error);
		msg.channel.send(
			'You need to be in a voice channel to use this command!'
		);
	}
};
