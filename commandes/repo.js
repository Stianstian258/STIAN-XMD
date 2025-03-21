const axios = require('axios');
const moment = require("moment-timezone");
const { zokou } = require(__dirname + "/../framework/zokou");

// Function to format large numbers with commas
const formatNumber = (num) => num.toLocaleString();

// Function to fetch detailed GitHub repository information
const fetchGitHubRepoDetails = async () => {
    try {
        const repo = 'NjabuloJ/NjabuloJb'; // Updated repo
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        const {
            name, description, forks_count, stargazers_count,
            watchers_count, open_issues_count, owner, license
        } = response.data;

        return {
            name: "Njabulo-Jb", // Updated repo name
            description: description || "No description provided",
            forks: forks_count,
            stars: stargazers_count,
            watchers: watchers_count,
            issues: open_issues_count,
            owner: owner.login,
            license: license ? license.name : "No license",
            url: response.data.html_url,
        };
    } catch (error) {
        console.error("Error fetching GitHub repository details:", error);
        return null;
    }
};

// Define the commands that can trigger this functionality
const commands = ["git", "repo", "script", "sc"];

commands.forEach((command) => {
    zokou({ nomCom: command, categorie: "GitHub" }, async (dest, zk, commandeOptions) => {
        let { repondre } = commandeOptions;

        const repoDetails = await fetchGitHubRepoDetails();

        if (!repoDetails) {
            repondre("❌ Failed to fetch GitHub repository information.");
            return;
        }

        const {
            name, description, forks, stars, watchers,
            issues, owner, license, url
        } = repoDetails;

        const currentTime = moment().format('DD/MM/YYYY HH:mm:ss');
        const infoMessage = `
🌐𝐆𝚰𝚻𝚮𝐔𝚩 𝚪𝚵𝚸𝚯𝐒𝚰𝚻𝚯𝚪𝐘 𝚰𝚴𝐅𝚯🌐

💻 *𝗡𝗮𝗺𝗲:* hαppínєss хmd
📜 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻:* ${description}
⭐ *𝗦𝘁𝗮𝗿𝘀:* ${formatNumber(stars)}
🍴 *𝗙𝗼𝗿𝗸𝘀:* ${formatNumber(forks)}
👀 *𝗪𝗮𝘁𝗰𝗵𝗲𝗿𝘀:* ${formatNumber(watchers)}
❗ *𝗢𝗽𝗲𝗻 𝗜𝘀𝘀𝘂𝗲𝘀:* ${formatNumber(issues)}
👤 *𝗢𝘄𝗻𝗲𝗿:* Njabulo Jb
📄 *𝗟𝗶𝗰𝗲𝗻𝘀𝗲:* ${license}

📅 *𝗙𝗲𝘁𝗰𝗵𝗲𝗱 𝗼𝗻:* ${currentTime}
`;

        try {
            // Send the follow-up image first with a caption
            await zk.sendMessage(dest, {
                image: { url: "https://files.catbox.moe/adh5ki.jpg" }, // Updated image
                caption: `🌐𝚪𝚵𝚸𝚯𝐒𝚰𝚻𝚯𝚪𝐘 𝚮𝚰𝐆𝚮𝐋𝚰𝐆𝚮𝚻𝐒 🌐⤵️\n\n🛠️ 🛠️ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝘆 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯*\n\n📁 𝚪𝚵𝚸𝚯 𝐋𝚰𝚴𝐊:\nhttps://github.com/NjabuloJ/Njabulo-Jb\n🪰𝗗𝗼𝗻'𝘁 𝗳𝗼𝗿𝗴𝗲𝘁 𝗴𝗶𝘃𝗲 𝘀𝘁𝗮𝗿 𝗮𝗻𝗱 𝗳𝗼𝗿𝗸𝘀🪰`,
            });

            // Follow up with the GitHub repository details
            await zk.sendMessage(dest, {
                text: infoMessage,
            });

        } catch (e) {
            console.log("❌ Error sending GitHub info:", e);
            repondre("❌ Error sending GitHub info: " + e.message);
        }
    });
});
              
