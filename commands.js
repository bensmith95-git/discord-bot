import { gifCommand as gif } from './commands/gif.js';
import { helloCommand as hello } from './commands/hello.js';
import { usersCommand as users } from './commands/users.js';
import { eraseCommand as erase } from './commands/erase.js';
import { cleanCommand as clean } from './commands/clean.js';
import { helpCommand as help } from './commands/help.js';

const commands = { gif, hello, users, erase, clean, help };
const commandList = [];
for (var command in commands) {
	commandList.push(command);
}
commandList.sort();

export const commandHandler = (msg) => {
	let tokens = msg.content.split(' ');
	let command = tokens.shift();
	if (command.charAt(0) === '?') {
		command = command.substring(1);
		if (commands.hasOwnProperty(command)) {
			commands[command](msg, tokens, commandList);
		} else {
			msg.channel.send(
				`Bruh. '${command}' is not a command! 🤦‍♂️\nUse **?help** for a list of commands`
			);
		}
	}
};
