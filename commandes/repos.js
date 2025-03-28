"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/NjabuloJ/Njabulo-jb';
  const img = 'https://files.catbox.moe/xfn913.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      // Construct message caption
    const messageCaption = `
      *Hello ,,,👋 This is Njabulo JB*
      The best bot in the universe developed by Njabulo. Fork and give a star 🌟 to my repo
╭───────────────────
│✞ *Stars:* ${repoInfo.stars}
│✞ *Forks:* ${repoInfo.forks}
│✞ *Release Date:* ${createdDate}
│✞ *Last Update:* ${lastUpdateDate}
│✞ *Owner:* ${repoInfo.owner}
│✞ *Repository:* ${repoInfo.url}
╰───────────────────
    `;

    // Send the generated message to the user
    await client.sendMessage(m.chat, {
      text: messageCaption,
      contextInfo: {
        mentionedJid: [m.sender], // Mention the sender
        externalAdReply: {
          title: "ɴᴊᴀʙᴜʟᴏ ᴊʙ",
          body: "ɴᴊᴀʙᴜʟᴏ ᴊʙ",
          sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
};
 await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
            
