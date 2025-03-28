const { zokou } = require('../framework/zokou');
const gis = require('g-i-s');
const axios = require('axios');
const conf = require(__dirname + '/../set');
zokou({
  nomCom: "img",
  aliases: ["image", "images"],
  categorie: "search",
  reaction: "☘️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('whích ímαgє dσ чσu wαnt mч fríєnd?');
    return;
  }

  const searchTerm = arg.join(" ");
  gis(searchTerm, (error, results) => sendImage(error, results));

  function sendImage(error, results) {
    if (error) {
      repondre("Oops, an error occurred.");
      return;
    }

    if (!results || results.length === 0) {
      repondre("No images found.");
      return;
    }

    for (let i = 0; i < Math.min(results.length, 5); i++) {
      zk.sendMessage(dest, {
        image: { url: results[i].url },
        caption: `☘️💗pσwєr вч ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️`,
        contextInfo: {
          externalAdReply: {
            title: "☘️💗ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️",
            body: `Here's the image you searched for: ${searchTerm}`,
            thumbnailUrl: results[i].url,
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true
          }
        }
      }, { quoted: ms });
    }
  }
});
zokou({
  nomCom: "waifues",
  categorie: "Hentai",
  reaction: "💗"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  const url = 'https://api.waifu.pics/nsfw/waifu'; // Replace with your actual URL

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      await zk.sendMessage(origineMessage, {
        image: { url: imageUrl },
        caption: `☘️💗pσwєr вч ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️`,
        contextInfo: {
          externalAdReply: {
            title: "☘️💗ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️",
            body: `Here's a great image related to: waifu`,
            thumbnailUrl: imageUrl,
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true
          }
        }
      }, { quoted: ms });
    }
  } catch (error) {
    repondre('Error retrieving data: ' + error.message);
  }
});
zokou({
  nomCom: "trap",
  categorie: "Hentai",
  reaction: "☘️"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  const url = 'https://api.waifu.pics/nsfw/trap'; // Replace with your actual URL

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      await zk.sendMessage(origineMessage, {
        image: { url: imageUrl },
        caption: `☘️💗pσwєr вч ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️`,
        contextInfo: {
          externalAdReply: {
            title: "☘️💗ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️",
            body: `Here's a great image related to: waifu`,
            thumbnailUrl: imageUrl,
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true
          }
        }
      }, { quoted: ms });
    }
  } catch (error) {
    repondre('Error retrieving data: ' + error.message);
  }
});
zokou({
  nomCom: "neko",
  categorie: "Hentai",
  reaction: "💗"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  const url = 'https://api.waifu.pics/nsfw/neko'; // Replace with your actual URL

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      await zk.sendMessage(origineMessage, {
        image: { url: imageUrl },
        caption: `☘️💗pσwєr вч ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️`,
        contextInfo: {
          externalAdReply: {
            title: "☘️💗ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️",
            body: `Here's a great image related to: waifu`,
            thumbnailUrl: imageUrl,
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true
          }
        }
      }, { quoted: ms });
    }
  } catch (error) {
    repondre('Error retrieving data: ' + error.message);
  }
});
zokou({
  nomCom: "girls",
  categorie: "Hentai",
  reaction: "💗"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  const url = 'https://api.waifu.pics/nsfw/blowjob'; // Replace with your actual URL

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      await zk.sendMessage(origineMessage, {
        image: { url: imageUrl },
        caption: `☘️💗pσwєr вч ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️`,
        contextInfo: {
          externalAdReply: {
            title: "☘️💗ɳᴊᴀʙᴜʟᴏ ᴊʙ ímg💗☘️",
            body: `Here's a great image related to: waifu`,
            thumbnailUrl: imageUrl,
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true
          }
        }
      }, { quoted: ms });
    }
  } catch (error) {
    repondre('Error retrieving data: ' + error.message);
  }
});
