const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const AUDIO_URL = "https://files.catbox.moe/e52xx6.mp3"; // New audio URL
const THUMBNAIL_URL = "https://files.catbox.moe/533oqh.jpg"; // New image URL

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'uptime',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '⚙️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
      
    try {
        await zk.sendMessage(dest, { 
        audio: { url: AUDIO_URL }, 
        mimetype: 'audio/mp4', 
        ptt: true, // Voice note form
          contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterJid: '120363317462952356@newsletter',
          newsletterName: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
          serverMessageId: 143,
         },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
          title: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
          body: ` UPTIME ${formatUptime(process.uptime())}\n📅 *Date:* ${date}\n⏰ *Time:* ${time}`,
          thumbnailUrl: 'https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/alive.jpg', // Add thumbnail URL if required 
          sourceUrl: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T', // Add source URL if necessary
          mediaType: 1,
          renderLargerThumbnail: true 
                }
            }
        }, { quoted: ms });

    } catch (e) {
        console.log("❌ uptime Command Error: " + e);
        repondre("❌ Error: " + e);
    }
});
  
