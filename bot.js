import Discord from 'discord.js';
import {} from 'dotenv/config';
import { commandHandler } from './commands.js';

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
	console.log('🤖✅');
});

client.on('message', commandHandler);
