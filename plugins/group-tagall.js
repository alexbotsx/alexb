let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `@ApoloBot ${pesan}`
  let teks = `𝑳𝑳𝑬𝑵𝑬𝑵 𝑷𝑳𝑨𝑵𝑻𝑨𝑺 🌱
${oi}\n\n ── 𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨\n`
  for (let mem of participants) {
  teks += `▌🌿@${mem.id.split('@')[0]}\n`}
  teks += `└𝑩𝒐𝒕𝑨𝒑𝒐𝒍𝒐`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|sia)$/i
  handler.admin = true
  handler.group = true
  export default handler