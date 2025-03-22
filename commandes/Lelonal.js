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

zokou({ nomCom: "fana", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
  🌇good evening : ${nomAuteurMessage}

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

        menuMsg += `
🌐↪️ *ʀᴇᴘʟʏ ᴀ ᴄᴀᴛᴇɢᴏʀʏ ᴡɪᴛʜ ɪᴛs ɴᴜᴍʙᴇʀ*  

*1* •🌐 •AI MENU

*2* •⤵️ •GENERAL MENU

*3* •🌐 •DOWNLOAD MENU

*4* •⤵️ •IMAGE EDIT MENU

*5* •🌐 •CONVERSION MENU

*6* •⤵️ •FUN MENU

*7* •🌐 •GAMES MENU

*8* •⤵️ •GROUP MENU

*9* •🌐 •MODS MENU

*10* •⤵️ •GITHUB MENU

*11* •🌐 •IMAGE MENU

*12* •⤵️ •LOGO MENU

*13* •🌐 •HEANTAIE MENU

*14* •⤵️ •REACTION MENU

*15* •🌐 •GITHUB MENU

*16* •⤵️ •SEARCH MENU

*17* •🌐 •USER MENU

*18* •⤵️ •HEROKU CLIENT MENU

*19* •🌐 •ANIME MENU`;
    }

    menuMsg += `\n🌐↪️ *MADE BY NJABULO JB 2025*`;

    var imageUrl = mybotpic();

    try {
        if (imageUrl.match(/\.(mp4|gif)$/i)) {
            await zk.sendMessage(dest, { video: { url: imageUrl }, caption: infoMsg + menuMsg, gifPlayback: true }, { quoted: ms });
        } else if (imageUrl.match(/\.(jpeg|png|jpg)$/i)) {
            await zk.sendMessage(dest, { image: { url: imageUrl }, caption: infoMsg + menuMsg }, { quoted: ms });
        } else {
            repondre(infoMsg + menuMsg);
        }

        // Download and send audio
        const audioUrl = "https://files.catbox.moe/dimtpb.m4a";
        const audioPath = "./temp_audio.mp3";

        const response = await axios({
            url: audioUrl,
            method: "GET",
            responseType: "stream",
        });

        const writer = fs.createWriteStream(audioPath);
        response.data.pipe(writer);

        writer.on("finish", async () => {
            await zk.sendMessage(dest, { audio: { url: audioPath }, mimetype: "audio/mp4", ptt: true }, { quoted: ms });
            fs.unlinkSync(audioPath); // Delete the audio file after sending
        });

    } catch (e) {
        console.log("🥵🥵 Menu error: " + e);
        repondre("🥵🥵 Menu error: " + e);
    }
});
