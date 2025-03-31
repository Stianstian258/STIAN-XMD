const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');
zokou({
  nomCom: 'uptime2',
  aliases: ['runtime', 'running'],
  desc: 'To check runtime',
  categorie: 'system', // Fixed the typo here (Categorie -> categorie)
  reaction: '⚔️',
  fromMe: true, // Removed quotes to make it a boolean
}, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;

  // Get bot's runtime
  const botUptime = process.uptime(); // Get the bot uptime in seconds

  // Send uptime information to the user
  await zk.sendMessage(dest, {
    text: `*${conf.OWNER_NAME} UPTIME IS ${runtime(botUptime)}*`,
    contextInfo: {
      externalAdReply: {
        title: `${conf.BOT} UPTIME`,
        body: `Bot Uptime: ${runtime(botUptime)}`, // Format the uptime before sending
        thumbnailUrl: conf.URL, // Replace with your bot profile photo URL
        sourceUrl: conf.GURL, // Your channel URL
        mediaType: 1,
        showAdAttribution: true, // Verified badge
      },
    },
  });
