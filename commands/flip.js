import { randomIndex } from '../helpers/helpers.js';
import { content } from '../content.js';

export const flipCommand = (msg) => {
	msg.channel.send(randomIndex(content.commands.flip.responses));
};
