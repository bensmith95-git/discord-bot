import * as allCommands from './commands/index.js';

const commands = { ...allCommands };

export const commandList = [];

for (var command in commands) {
	commandList.push(command);
}
commandList.sort();

export const commandHandler = async (msg) => {
	let args = msg.content.split(' ');
	let command = args.shift();
	if (command.charAt(0) === '?') {
		command = command.substring(1);
		if (commands.hasOwnProperty(command)) {
			commands[command](msg, args);
		} else {
			msg.channel.send(
				`Bruh. '${command}' is not a command! 🤦‍♂️\nUse **?help** for a list of commands`
			);
		}
		try {
			await msg.delete({ timeout: 3000 });
		} catch (error) {}
	}
};
