const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const conf = require(__dirname + "/../set");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault ("Africa/nairobi");

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭─────────────━┈⊷
│ᴏᴡɴᴇʀ : ʜᴀᴘᴘɪɴᴇss xᴍᴅ
│ᴅᴀᴛᴇ: ${date}
│ᴛɪᴍᴇ : ${temps}
│ᴘʀᴇғɪx : [  ${s.PREFIXE}  ]
│ᴍᴏᴅᴇ :  ${mode} mode
│ᴘʟᴜɢɪɴs : ${cm.length}
│ʀᴜɴɴɪɴɢ ᴏɴ : ${os.platform()}
│ᴏᴡɴᴇʀ :  ɴᴊᴀʙᴜʟᴏ ᴊʙ
│ʀᴀᴍ : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
╰─────────────━┈⊷

hαppínєss хmd\n${readmore}`;
    
    
let menuMsg = `

 *𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*`;

    for (const cat in coms) {
        menuMsg += `╭───❮ *${cat}* ❯─┈⊷`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│ ${cmd}`;
        }
        menuMsg += `
╰─────────────━┈⊷ \n`
    }

    menuMsg += `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363345407274799@newsletter',
              newsletterName: 'ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴏғғɪᴄᴇ',
              serverMessageId: 143},
        externalAdReply: {
          title: "hαppínєss хm"",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://i.ibb.co/3YVC86md/lordcasey.jpg",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true,

          showAdAttribution: false
        }
      }
    }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363345407274799@newsletter',
              newsletterName: 'ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴏғғɪᴄᴇ',
              serverMessageId: 143},
        externalAdReply: {
          title: "hαppínєss хmd",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/yedfbr.jpg",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true,

          showAdAttribution: false
        }
      }
    }, { quoted: ms });
      }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363345407274799@newsletter',
              newsletterName: 'ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴏғғɪᴄᴇ',
              serverMessageId: 143},
        externalAdReply: {
          title: "hαppínєss хmd",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/yedfbr.jpg",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true


        }
      }
    }, { quoted: ms });
    
}

});
