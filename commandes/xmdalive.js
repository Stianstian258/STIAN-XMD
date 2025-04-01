"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ezra } = require("../fredi/ezra");

ezra(
  { nomCom: "alive", reaction: "💗", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/bq7ym6.jpg"; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/bq7ym6.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/wdap4t.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💫 Always Active 🔥\n\n✨ Contact: ${contactName}\n🙏 [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterJid: '120363317462952356@newsletter',
          newsletterName: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
          serverMessageId: 143,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "🌟 Message from: ${contactName}\n💗 Njabulo Jb alive ☘️`, // Your contact in WhatsApp status format
            body: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
            thumbnailUrl: 'https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/alive.jpg', // Add thumbnail URL if required 
            sourceUrl: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready!");





ezra(
  { nomCom: "test", reaction: "☘️", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // URLs and configurations
    const fullImageUrl = "https://files.catbox.moe/bq7ym6.jpg"; // Full image URL
    const smallThumbnailUrl = "https://files.catbox.moe/bq7ym6.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/wdap4t.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💥 Always Active 💥\n\n🎙️ Contact: ${contactName}\n🎙️ [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
            serverMessageId: 143,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "🌟 Message from: ${contactName}\n☘️ NJABULO JB IS ALIVE 💗`, // Your contact in WhatsApp status format
            body: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
            thumbnailUrl: 'https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/alive.jpg', // Add thumbnail URL if required 
            sourceUrl: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true
          },
          forwardingScore: -1, // Prevent message forwarding
        }
      });

      console.log("Alive message sent successfully with customized layout.");
    } catch (error) {
      console.error("Error sending Alive message:", error.message);
    }
  }
);
