const { zokou } = require("../framework/zokou")
//const { getGroupe } = require("../bdd/groupe")
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const {ajouterOuMettreAJourJid,mettreAJourAction,verifierEtatJid} = require("../bdd/antilien")
const {atbajouterOuMettreAJourJid,atbverifierEtatJid} = require("../bdd/antibot")
const fs = require("fs-extra");
const conf = require("../set");
const { default: axios } = require('axios');


zokou({ nomCom: "tagalladmin", categorie: 'Group', reaction: "📣" }, async (dest, zk, commandeOptions) => {

  const { ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin, superUser } = commandeOptions;

  if (!verifGroupe) { 
    repondre("✋🏿 ✋🏿 This command is reserved for groups ❌"); 
    return; 
  }

  if (!verifAdmin && !superUser) { 
    repondre("Command reserved for admins ❌"); 
    return; 
  }

  let mess = arg && arg !== ' ' ? arg.join(' ') : 'Aucun Message';

  let adminsGroupe = infosGroupe.participants.filter(membre => membre.admin); // Filtering only admins

  let tag = `  
╭─────────────━┈⊷ 
│🔰 xɢᴀɢᴀ ᴀᴅᴍɴ ᴛᴀɢ
╰─────────────━┈⊷ \n
│👥 *Group* : ${nomGroupe} 
│👤 *Hey* : *${nomAuteurMessage}* 
│📜 *Message* : *${mess}* 
╰─────────────━┈⊷\n\n`;

  let emoji = ['🦴', '👀', '😮‍💨', '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', '🙏🏿', '⛔️', '$', '😟', '🥵', '🐅'];
  let random = Math.floor(Math.random() * emoji.length);

  for (const membre of adminsGroupe) {
    tag += `${emoji[random]}      @${membre.id.split("@")[0]}\n`;
  }

  zk.sendMessage(dest
  text: tag
  mentions: adminsGroupe.map(i => i.id) }, { quoted: ms });
   contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
           title: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
           body: "fast via",
           thumbnailUrl: 'https://files.catbox.moe/cs7xfr.jpg', // Add thumbnail URL if required 
           sourceUrl: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T', // Add source URL if necessary
           mediaType: 1,
           renderLargerThumbnail: true

});
