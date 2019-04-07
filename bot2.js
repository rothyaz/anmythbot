const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'カイ') {
 msg.reply('「あたしは人間で、みんなの運命共同体の輪には入れない。だからこそ、手伝うよ」', {files: ["/Users/hoshino/Pictures/kai.png"]});
 }
 });

client.on('message', msg => {
 if (msg.content === 'こんにちは') {
 msg.reply('おはよう！');
 }
 });

client.on('message', msg => {
 if (msg.content === 'すいか') {
 msg.reply('ｼｬｸ', {files: ["/Users/hoshino/Pictures/63293446_p0.png"]});
 }
 });

client.login('NTY0MzQ5NDE2MzU0NDgwMTI5.XKpS-A.neV0OJEG_8XcatSRchtN7ktFqvU');