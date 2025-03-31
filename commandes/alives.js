const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { zokou } = require(__dirname + "/../framework/zokou");
const os = require("os");
const moment = require("moment-timezone");
const set = require(__dirname + "/../set");

const AUDIO_URL = "https://files.catbox.moe/e52xx6.mp3"; // New audio URL
const THUMBNAIL_URL = "https://files.catbox.moe/533oqh.jpg"; // New image URL

moment.tz.setDefault(`${set.TZ}`);

const getTimeAndDate = () => {
    return {
        time: moment().format('HH:mm:ss'),
        date: moment().format('DD/MM/YYYY')
    };
};

// Get bot's runtime
zokou({ nomCom: "uptimes", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms } = commandeOptions;
    const { time, date } = getTimeAndDate();
    const botUptime = process.uptime(); // Get the bot uptime in seconds

    try {
        await zk.sendMessage(dest, { 
            audio: { url: AUDIO_URL }, 
            mimetype: 'audio/mp4', 
            ptt: true, // Voice note form
            contextInfo: {
                externalAdReply: {
                    title: "🤖 DULLAH-XMD 🤖",
                    body: `🏓 Bot Uptime: ${runtime(botUptime)}\n📅 *Date:* ${date}\n⏰ *Time:* ${time}`,
                    thumbnailUrl: THUMBNAIL_URL,
                    mediaType: 1,
                    renderSmallThumbnail: true // Small thumbnail rendering
                }
            }
        }, { quoted: ms });

    } catch (e) {
        console.log("❌ uptime Command Error: " + e);
        repondre("❌ Error: " + e);
    }
});
