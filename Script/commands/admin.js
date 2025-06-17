const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.7",
    hasPermssion: 0,
    credits: "ULLASH",
    description: "Show Owner Info without Image",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
    const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    return api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝐓𝐚𝐧𝐯𝐢𝐫 𝐀𝐡𝐦𝐞𝐝
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐒𝐢𝐧𝐠𝐥𝐞
┃ 🎂 𝐀𝐠𝐞       : 16+
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐂𝐥𝐚𝐬𝐬 9
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐑𝐚𝐧𝐠𝐩𝐮𝐫 𝐌𝐞𝐝𝐢𝐜𝐚𝐥 𝐌𝐨𝐫𝐞
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `
    }, event.threadID);
};
