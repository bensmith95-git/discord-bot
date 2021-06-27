import { randomIndex } from '../helpers/helpers.js';
import { content } from '../content.js';

export const helloCommand = (msg) => {
	msg.channel.send(randomIndex(content.commands.hello.replies));
};
