const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const Taphere = more.repeat(4001)

zokou({ nomCom: "bugmenu", categorie: "General" }, async (dest, zk, commandeOptions) => {
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

    moment.tz.setDefault("Africa/Dar Es Salam");

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

let infoMsg =  `
┏❏ ⌜ *𝐀𝐋𝐏𝐇𝐀𝐌𝐃 𝐁𝐔𝐆* ⌟  ❐
❐ bug
❐ crash
❐ loccrash
❐ amountbug <amount>
❐ crashbug 254XXXX
❐ pmbug 254XXXX
❐ delaybug 254XXXX
❐ trollybug 254XXXX
❐ docubug 254XXXX
❐ unlimitedbug 254XXXX
❐ bombug 254XXXX
❐ lagbug 254XXXX
❐ gcbug <grouplink>
❐ delaygcbug <grouplink>
❐ trollygcbug <grouplink>
❐ laggcbug <grouplink>
❐ bomgcbug <grouplink>
❐ unlimitedgcbug <grouplink>
❐ docugcbug <grouplink>

> ⏲️ *TIME* : ${temps}
> 📅 *DATE* : ${date} `;

    menuMsg += `> njabulo
`;
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363345407274799@newsletter'',
              newsletterName: 'ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴏғғɪᴄᴇ',
              serverMessageId: 143},
        externalAdReply: {
          title: "Njabulo Jb",
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
});
