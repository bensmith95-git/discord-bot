import { randomIndex } from '../helpers/helpers.js';

const replies = ['Hello there!', 'Hi', "What's up?"];

export const helloCommand = (msg) => {
	msg.channel.send(randomIndex(replies));
};
