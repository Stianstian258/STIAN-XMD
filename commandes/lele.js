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

zokou({ nomCom: "lele", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
                ╭─────────────━┈⊷
                │ʙᴏᴛ ɴᴀᴍᴇ: ${s.OWNER_NAME}
                │ᴘʀᴇғɪx: : [ ${s.PREFIXE} ]
                │ʙᴏᴛ ɴᴀᴍᴇ:  : ${mode}
                │ᴛɪᴍᴇ  : ${temps}
                │ᴅᴀᴛᴇ  : ${date}
                │ᴘʟᴀᴛғᴏʀᴍ: * : ${os.platform()}
                ╰─────────────━┈⊷ \n`;

    let menuMsg = ``;

     {
        menuMsg += `
                ╭━❮ 𝐀𝐈 ❯━╮
                ┃✰ ʙᴇʟᴛᴀʜᴍᴅ
                ┃✰ ᴄʜᴀᴛ
                ┃✰ ɢᴇᴍɪɴɪ
                ┃✰ ɢᴘᴛ
                ┃✰ ɪʟᴀᴍᴀ
                ┃✰ ɴᴇᴡ𝚜
                ╰━━━━━━━━━━━━━━━┈⊷
               ╭━❮ 𝐀𝐔𝐃𝐈𝐎-𝐄𝐃𝐈𝐓 ❯━╮
               ┃✰ ʙᴀ𝚜𝚜
               ┃✰ ʙʟᴏᴡɴ
               ┃✰ ᴅᴇᴇᴘ
               ┃✰ ᴇᴀʀʀᴀᴘᴇ
               ┃✰ ғᴀᴛ
               ┃✰ ɴɪɢʜᴛᴄᴏʀᴇ
               ┃✰ ʀᴇᴠᴇʀ𝚜ᴇ
               ┃✰ ʀᴏʙᴏᴛ
               ┃✰ 𝚜ʟᴏᴡ
               ┃✰ 𝚜ᴍᴏᴏᴛʜ
               ┃✰ ᴛᴇᴍᴘᴏ
               ┃✰ ᴛᴜᴘᴀɪ
               ╰━━━━━━━━━━━━━━━┈⊷
`;
    }

    menuMsg += `\n> @𝐌𝐀𝐃𝐄 𝐁𝐘 𝐂𝐑𝐈𝐒𝐒 𝐕𝐄𝐕𝐎`;

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
        const audioUrl = "https://files.catbox.moe/xci982.mp3";
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
