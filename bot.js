import Discord from 'discord.js';
import {} from 'dotenv/config';
import { commandHandler } from './commands.js';

export const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
	client.user.setPresence({
		status: 'available',
		activity: {
			name: '?help',
			type: 'WATCHING',
		},
	});
	console.log('🤖✅');
});

client.on('message', commandHandler);
