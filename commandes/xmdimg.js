const { zokou } = require('../framework/zokou');
const gis = require('g-i-s');
const axios = require('axios');
const conf = require(__dirname + '/../set');
zokou({
  nomCom: "screenshot",
  aliases: ["ss", "sshot"],
  categorie: "AI",
  reaction: "💗"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `scrєєnshσt вч ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ σffícє pαgє`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/fullpage/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
  }
});
zokou({
  nomCom: "normalshot",
  categorie: "AI",
  reaction: "☘️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `scrєєnshσt вч ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ σffícє pαgє`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/noanimate/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
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
