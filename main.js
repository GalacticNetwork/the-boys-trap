const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const streamOptions = { seek: 0, volume : 1}
const bot = new Discord.Client();

bot.on('ready', () => {
	bot.user.setGame('Trap 24/7', 'https://www.twitch.tv/snoopytv_');
});

bot.on('ready', function()
{
	console.log('Connected!');
	bot.channels.find('id', '403045302539386890').sendMessage(':musical_note: **Trap** radio now online!')
	bot.channels.find('id', '403045361138139146').join()
	.then(function(connection)
	{
		const stream = ytdl('https://www.youtube.com/watch?v=p21RWJYGbPU');
		const dispatcher = connection.playStream(stream, streamOptions);

		connection.on('error', (err) =>
		{
			console.log("err : ", err);
		});
		connection.on('disconnected', (err) =>
		{
			console.log("err : ", err);
		});
	})
	.catch(function(e)
	{
		console.log("err : ",e);
	});
});

// Bot login
bot.login('NDAzMDQzODEzOTY4NTc2NTIy.DUBkWg.9eJXCp2-XksDLj0Ww3GghqePIDM');
