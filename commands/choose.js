import { randomIndex } from '../helpers/helpers.js';

export const chooseCommand = (msg, tokens) => {
	let choices = tokens.join(' ').split(',');
	if (choices.length > 1) {
		msg.channel.send(randomIndex(choices));
	} else {
		msg.channel.send(
			'Please provide at least two options, seperated with a [,]'
		);
	}
};
