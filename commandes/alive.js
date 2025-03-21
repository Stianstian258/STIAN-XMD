const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "alive", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    let coms = {};
    let mode = "public";

    if ((s.MODE).toLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `


🅷🅰🅿🅿🅸🅽🅴🆂🆂 🆇🅼🅳 🅸🆂 🅰🅻🅸🆅🅴 

🪰𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐛𝐨𝐭 𝐦𝐮𝐥𝐭𝐢 𝐝𝐞𝐯𝐢𝐜𝐞🪰⤵️

hαppínєss хmd αlívє runníng tσ  :  ${formatUptime(process.uptime())}

💡                                                            💡
`;
    }
    
    menuMsg += `
 ❍═════════════════════❍\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "❍═══hαppínєss хmd ís αlívє═══❍",
                    body: "ᴛᴀᴘ ʜᴇʀᴇ ᴍʏ ᴈʀɪᴇɴᴅ ᴊᴏɪɴ ᴄʜᴀɴɴᴇʟ ᴜᴘᴅᴀᴛᴇ",
                    thumbnailUrl: "https://files.catbox.moe/60hwdx.jpeg",
                    sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre("🥵🥵 Menu error: " + error);
    }
});
      
