import { gifCommand } from './commands/gif.js';
import { helloCommand } from './commands/hello.js';

export const commandHandler = (msg) => {
	if (msg.channel.id === process.env.GENERAL_CHANNEL_ID) {
		let tokens = msg.content.split(' ');
		let command = tokens.shift();
		if (command.charAt(0) === '!') {
			command = command.substring(1);
			switch (command) {
				case 'gif':
					gifCommand(msg, tokens);
					break;
				case 'hello':
					helloCommand(msg);
					break;
				default:
					msg.channel.send('not a command!');
					break;
			}
		}
	}
};
