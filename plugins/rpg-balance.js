const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜✨𝑼𝑵 𝑩𝑨𝑳𝑨𝑵𝑪𝑬░⃟⃜🐾⁩」
├✨ᬽ៸ *𝐂𝐥𝐢𝐞𝐧𝐭𝐞:* ${name}
├🌻ᬽ៸ *𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬*: ${global.db.data.users[who].diamond} 💎
├🌼ᬽ  *𝐄𝐱𝐩:* ${global.db.data.users[who].exp}
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🪁◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐𝑁𝑂𝑇𝐴*️⃟ᬽ፝֟━*
├❥ᰰຼ *𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎*
├❥ᰰຼ *𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜*
├❥ᰰຼ ✰ *${usedPrefix}buy <cantidad>*
├❥ᰰຼ ✰ *${usedPrefix}buyall*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
