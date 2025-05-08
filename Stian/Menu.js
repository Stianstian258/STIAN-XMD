const axios = require("axios");
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const settings = require(__dirname + "/../set");

const readMore = String.fromCharCode(8206).repeat(4001);

const toFancyUppercaseFont = (text) => {
    const fonts = {
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌',
        'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
    };
    return text.split('').map(char => fonts[char] || char).join('');
};

const formatUptime = (seconds) => {
    seconds = Number(seconds);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return [
        days > 0 ? `${days} ${days === 1 ? "day" : "days"}` : '',
        hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : '',
        minutes > 0 ? `${minutes} ${minutes === 1 ? "minute" : "minutes"}` : '',
        remainingSeconds > 0 ? `${remainingSeconds} ${remainingSeconds === 1 ? "second" : "seconds"}` : ''
    ].filter(Boolean).join(', ');
};

zokou({ nomCom: "menu", aliases: ["menu", "help"], categorie: "SYSTEM" }, async (message, client, config) => {
    const { ms, respond, prefix, nomAuteurMessage } = config;
    const commands = require(__dirname + "/../keizzah/keith").cm;
    const categorizedCommands = {};
    const mode = settings.MODE.toLowerCase() !== "public" ? "Private" : "Public";

    // Organize commands into categories
    commands.forEach(command => {
        const category = command.categorie.toUpperCase();
        if (!categorizedCommands[category]) {
            categorizedCommands[category] = [];
        }
        categorizedCommands[category].push(command.nomCom);
    });

    // Generate menu header
    moment.tz.setDefault("Africa/Nairobi");
    const currentTime = moment();
    const formattedTime = currentTime.format("HH:mm:ss");
    const formattedDate = currentTime.format("DD/MM/YYYY");

    const greeting = currentTime.hour() < 12 ? "Good Morning 🌄" : currentTime.hour() < 17 ? "Good Afternoon 🌃" : "Good Evening ⛅";

    const header = `
${greeting}, *${nomAuteurMessage || "User"}*

╭━━━━❮  ${settings.BOT}  ❯━━━━╮
┃ *Owner:* ${settings.OWNER_NAME}
┃ *Prefix:* ${settings.PREFIXE}
┃ *Mode:* ${mode}
┃ *Time:* ${formattedTime}
┃ *Date:* ${formattedDate}
┃ *Uptime:* ${formatUptime(process.uptime())}
╰━━━━━━━━━━━━━━━━━━━━━╯
`;

    // Generate category list
    const categoryList = Object.keys(categorizedCommands).sort().map((category, index) => {
        return `*${index + 1}.* ${toFancyUppercaseFont(category)}`;
    }).join('\n');

    const instructions = `
Reply with the category number to view its commands.
`;

    const fullMenu = `${header}\n${categoryList}\n${instructions}`;

    try {
        await client.sendMessage(message, {
            text: fullMenu,
            contextInfo: {
                mentionedJid: [message.sender],
                externalAdReply: {
                    title: "STIAN-XMD Men",
                    body: "Select a category by replying with its number",
                    thumbnailUrl: "https://files.catbox.moe/156gmq.jpeg",
                    sourceUrl: settings.GURL
                }
            }
        }, { quoted: ms });
    } catch (error) {
        console.error("Menu error: ", error);
        respond("Error displaying menu: " + error);
    }
});
