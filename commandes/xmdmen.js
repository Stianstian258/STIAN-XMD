const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "happp", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");

    var commandsList = {};
    var mode = (s.MODE).toLocaleLowerCase() !== "yes" ? "private" : "public";

    cm.map((com) => {
        if (!commandsList[com.categorie]) commandsList[com.categorie] = [];
        commandsList[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('EAT');

    const time = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
  🪰good evening : ${nomAuteurMessage}

╭─────────━┈⊷
│ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ʜᴀᴘᴘɪɴᴇss xᴍᴅ
│ᴘʀᴇғɪx : [ ${s.PREFIXE} ]
│ᴍᴏᴅᴇ : ${mode}
│ᴅᴀᴛᴇ  : ${date}
│ᴘʟᴀᴛғᴏʀᴍ : ${os.platform()}
│ᴏᴡɴᴇʀ : ɴᴊᴀʙᴜʟᴏ ᴊʙ 
│ᴘʟᴜɢɪɴs : ${cm.length}
╰─────────━┈⊷ \n`;

    let menuMsg = ` ${readmore}`;

    for (const category in commandsList) {
        menuMsg += `
╭───❮ ${category} ❯─┈⊷
│╭────••••────⊷ `;
        for (const cmd of commandsList[category]) {
            menuMsg += `          
│   ${cmd}`;
        }
        menuMsg += `
│└────••••────⊷
╰─────────━┈⊷`;
    }

    menuMsg += `\n> sir Njabulo Jb 2025`;

   try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯",
                    body: "𝚊𝚕𝚠𝚊𝚢𝚜•••𝚘𝚗𝚕𝚒𝚗𝚎!",
                    thumbnailUrl: settings.URL,
                    sourceUrl: settings.GURL,
                    mediaType: 1,
                    renderLargerThumbnail: true
                    },
                },
            }, { quoted: ms });
        } else {
   try {
        await zk.sendMessage(dest, {
        image: { url: mediaUrl },
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯",
                    body: "𝚊𝚕𝚠𝚊𝚢𝚜•••𝚘𝚗𝚕𝚒𝚗𝚎!",
                    thumbnailUrl: settings.URL,
                    sourceUrl: settings.GURL,
                    mediaType: 1,
                    renderLargerThumbnail: true
                    },
                },
            }, { quoted: ms });
        }
    } catch (e) {
        console.log("🥵🥵 Error sending menu: " + e);
        repondre("🥵🥵 Error sending menu: " + e);
    }

    // List of audio URLs
    const audioUrls = [
        "https://files.catbox.moe/wsyxi0.mp3",
        "https://files.catbox.moe/w2k8g2.mp3",
        "https://files.catbox.moe/cpjbnl.mp3",
        "https://files.catbox.moe/y6fph9.mp3",
        "https://files.catbox.moe/moctzu.mp3" // New song added
    ];

    // Select a random audio file
    const randomAudioUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];

    try {
        await zk.sendMessage(dest, {
            audio: { url: randomAudioUrl },
            mimetype: 'audio/mpeg',
            ptt: true, // Send as a voice note
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵🥵 Error sending audio: " + e);
        repondre("🥵🥵 Error sending audio: " + e);
    }
});