const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[💖]𝗖𝗵𝗮𝘁 𝗗𝗲𝘀𝗯𝗮𝗻𝗲𝗮𝗱𝗼 𝗖𝗼𝗻 𝗘𝘅𝗶𝘁𝗼 , 𝗬𝗮 𝗣𝘂𝗲𝗱𝗲𝗻 𝗨𝘀𝗮𝗿 NigromanteBot-MD 🌹*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;

