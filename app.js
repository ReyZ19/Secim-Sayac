const { Client, Events, GatewayIntentBits } = require('discord.js');
const { TOKEN } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	var countDownDate = new Date("May 28, 2023 08:00:00").getTime();

	setInterval(() => {
		var now = new Date().getTime();
		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

		if (days <= 0) days = "";
		else days += ' gün ';
		if (days <= 0 && hours <= 0) hours = "";
		else hours += ' saat ';
		if (days <= 0 && hours <= 0 && minutes <= 0) minutes = "SEÇİM BAŞLADI!";
		else minutes += ' dakika';

		client.user.setPresence({ status: 'online', activities: [{ name: `${days}${hours}${minutes}` }] });
	}, 15000)
});

client.login(TOKEN);
