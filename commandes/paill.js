
const { zokou } = require('../framework/zokou');
const axios = require('axios');
const wiki = require('wikipedia');
const conf = require(__dirname + "/../set");
zokou({
  nomCom: "paircode",
  aliases: ["session", "qrcode"],
  reaction: '☘️',
  categorie: 'new'
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  if (!arg || arg.length === 0) {
    const replyText = "Example Usage: .code 255752xxxxxx.";
    return repondre(replyText);
  }

  try {
    // Notify user that pairing is in progress
    const replyText = "ᴡᴀɪᴛ ɴᴊᴀʙᴜʟᴏ ᴊʙ ɪs ɢᴇᴛᴛɪɴɢ ʏᴏᴜʀ ᴘᴀɪʀ ᴄᴏᴅᴇ";
    await repondre(replyText);

    // Prepare the API request
    const encodedNumber = encodeURIComponent(arg.join(" "));
    const apiUrl = `https://pair-session.onrender.com?number=${encodedNumber}`;

    // Fetch the pairing code from the API
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data && data.code) {
      const pairingCode = data.code;
      await zk.sendMessage(dest, {
        text: pairingCode,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterJid: '120363317462952356@newsletter',
          newsletterName: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
          serverMessageId: 143,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "NJABULO-JB PAIR CODE",
            body: "Here is your pairing code",
            thumbnailUrl: 'https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/alive.jpg', // Add thumbnail URL if required 
            sourceUrl: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true
          },
        },
      }, { quoted: ms });

      const secondReplyText = "*ʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴘᴀɪʀ ᴄᴏᴅᴇ, ᴄᴏᴘʏ ᴀɴᴅ ᴘᴀsᴛᴇ ɪᴛ ᴛᴏ ᴛʜᴇ ɴᴏᴛɪғɪᴄᴀᴛɪᴏɴ ᴀʙᴏᴠᴇ ᴏʀ ʟɪɴᴋ ᴅᴇᴠɪᴄᴇs*";
      await repondre(secondReplyText);
    } else {
      throw new Error("Invalid response from API.");
    }
  } catch (error) {
    console.error("Error getting API response:", error.message);
    const replyText = "Error getting response from API.";
    repondre(replyText);
  }
});
      
