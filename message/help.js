
exports.menu = (listcmdblock, fs, isPremium, getLimit, limit, limitCount, balance, getBalance, sender, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender) => {
return`
*╭─❲ ${fake} ❳*
*│*
*│*     ${ucapanWaktu} kak 
*│▸* Nama : ${pushname}
*│▸* Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
*│▸* Balance : $${getBalance(sender, balance)}
*│▸* Hit Today : ${JSON.parse(fs.readFileSync('./database/hitToday.json')).length}
*│▸* Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length}
*│▸* Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
*│▸* User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
*│▸* User Blocked : ${JSON.parse(fs.readFileSync('./database/userblocked.json')).length} 
*│▸* Cmd Blocked : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length} 
*│*
*╰────────────⦁*
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*╭─❲ GROUP ❳*
*│*
*│▸* ${prefix}antilink
*│▸* ${prefix}antilinkgc
*│▸* ${prefix}antivirtex  
*│▸* ${prefix}antibuggc 
*│▸* ${prefix}antitroli 
*│▸* ${prefix}antihidetag 
*│▸* ${prefix}antibadword 
*│▸* ${prefix}antivo 
*│▸* ${prefix}add 
*│▸* ${prefix}kick
*│▸* ${prefix}kicktime 
*│▸* ${prefix}opentime   Fix
*│▸* ${prefix}closetime    Fix
*│▸* ${prefix}welcome    Fix
*│▸* ${prefix}linkgc
*│▸* ${prefix}infogc
*│▸* ${prefix}gc
*│▸* ${prefix}setdesc 
*│▸* ${prefix}setname 
*│▸* ${prefix}infoall 
*│▸* ${prefix}sider 
*│▸* ${prefix}unbanchat
*│▸* ${prefix}promote 
*│▸* ${prefix}demote 
*│▸* ${prefix}revoke
*│▸* ${prefix}getppgc
*│▸* ${prefix}getbio 
*│▸* ${prefix}getpp 
*│▸* ${prefix}ban 
*│▸* ${prefix}unban 
*│▸* ${prefix}listban
*│▸* ${prefix}reminder 
*│▸* ${prefix}ceksewa 
*│▸* ${prefix}voting 
*│▸* ${prefix}delvote
*│▸* vote
*│▸* devote
*│*
*╰────────────⦁*

*╭─❲ INFO ❳*          
*│*
*│* ▸ Antibuggc : ${Antibuggc ? 'ON' : 'OFF'}
*│* ▸ Antibadword : ${Toxic ? 'ON' : 'OFF'}
*│* ▸ Antihidetag : ${isAntihidetag ? 'Aktif' : 'OFF'}
*│* ▸ Antiasing : ${isKickarea ? 'ON' : 'OFF'}
*│* ▸ Antilink : ${isAntiLink ? 'ON' : 'OFF'}
*│* ▸ Antivirtex : ${AntiVirtex ? 'ON' : 'OFF'}
*│* ▸ Antivo : ${isAntiviewonce ? 'ON' : 'OFF'}
*│* ▸ Autotyping : ${typing ? 'ON' : 'OFF'}
*│* ▸ Autovn : ${autovn ? 'ON' : 'OFF'}
*│* ▸ Autosticker : ${autosticker ? 'ON' : 'OFF'}
*│* ▸ Autoread : ${autoread ? 'ON' : 'OFF'}
*│* ▸ Forward : ${forwarding ? 'ON' : 'OFF'}
*│*
*╰────────────⦁*

*╭─❲ RANDOM ❳*
*│*
*│▸* ${prefix}waifu 
*│▸* ${prefix}loli   
*│▸* ${prefix}cosplay 
*│▸* ${prefix}wallml     
*│▸* ${prefix}katailham
*│▸* ${prefix}anna 
*│▸* ${prefix}asunayuki  
*│▸* ${prefix}ayuzawa 
*│▸* ${prefix}chitoge 
*│▸* ${prefix}emilia    
*│▸* ${prefix}erza 
*│▸* ${prefix}hinata
*│▸* ${prefix}naruto 
*│▸* ${prefix}sasuke  
*│▸* ${prefix}anime
*│▸* ${prefix}memeindo
*│*
*╰────────────⦁*

*╭─❲ GAME ❳*
*│*
*│▸* ${prefix}tebakbendera    No Api
*│▸* ${prefix}tebakgambar     No Api
*│▸* ${prefix}tebakanime    Eror
*│▸* ${prefix}caklontong     No Api
*│▸* ${prefix}family100     No Api
*│▸* ${prefix}tebakkata     
*│▸* ${prefix}tebaklirik     No Api
*│▸* ${prefix}siapaaku     No Api
*│▸* ${prefix}math
*│*
*╰────────────⦁*

*╭─❲ USER LIMIT ❳*
*│*
*│▸* ${prefix}limit 
*│▸* ${prefix}claim
*│▸* ${prefix}cekprem 
*│▸* ${prefix}listprem
*│▸* ${prefix}topbalance 
*│▸* ${prefix}buylimit
*│▸* ${prefix}buygamelimit
*│▸* ${prefix}myprofil
*│*
*╰────────────⦁*

*╭─❲ MAKER ❳*
*│*
*│▸* ${prefix}sticker 
*│▸* ${prefix}swm 
*│▸* ${prefix}take 
*│▸* ${prefix}fdeface 
*│▸* ${prefix}trigger 
*│▸* ${prefix}attp 
*│▸* ${prefix}ttp2
*│▸* ${prefix}ttp3
*│▸* ${prefix}wasted
*│▸* ${prefix}ttp    
*│▸* ${prefix}emoji 
*│▸* ${prefix}semoji  
*│▸* ${prefix}nuliskiri 
*│▸* ${prefix}nuliskanan 
*│▸* ${prefix}foliokiri     New™
*│▸* ${prefix}foliokanan  New™
*│▸* ${prefix}tts 
*│▸* ${prefix}narutoteks    
*│▸* ${prefix}shadow 
*│▸* ${prefix}romantic 
*│▸* ${prefix}smoke 
*│▸* ${prefix}burnpaper 
*│▸* ${prefix}lovemsg 
*│▸* ${prefix}grass 
*│▸* ${prefix}doubleheart 
*│▸* ${prefix}coffecup 
*│▸* ${prefix}lovetext 
*│▸* ${prefix}butterfly 
*│▸* ${prefix}wanted
*│▸* ${prefix}sniper
*│▸* ${prefix}rip
*│▸* ${prefix}instagram
*│▸* ${prefix}beautiful
*│▸* ${prefix}scary
*│▸* ${prefix}utatoo
*│▸* ${prefix}missionpassed
*│▸* ${prefix}glitch
*│▸* ${prefix}fire
*│▸* ${prefix}dictator
*│▸* ${prefix}ddungeon
*│*
*╰────────────⦁*

*╭─❲ CONVERTER ❳*
*│*
*│▸* ${prefix}toimg 
*│▸* ${prefix}tomp3 
*│▸* ${prefix}toptt 
*│▸* ${prefix}slow 
*│▸* ${prefix}fast 
*│▸* ${prefix}reverse 
*│▸* ${prefix}pastebin 
*│▸* ${prefix}hode 
*│▸* ${prefix}imut 
*│▸* ${prefix}nightcore 
*│▸* ${prefix}ghost 
*│▸* ${prefix}volume     New™
*│*
*╰────────────⦁*

*╭─❲ STORAGE ❳*
*│*
*│▸* ${prefix}addmusik
*│▸* ${prefix}adderror
*│▸* ${prefix}addstik
*│▸* ${prefix}addimg
*│▸* ${prefix}addvid
*│▸* ${prefix}addvn
*│▸* ${prefix}liststik
*│▸* ${prefix}listimg
*│▸* ${prefix}listvid
*│▸* ${prefix}listerror
*│▸* ${prefix}delimg
*│▸* ${prefix}delvn
*│▸* ${prefix}delstik
*│▸* ${prefix}delerror
*│*
*╰────────────⦁*

*╭─❲ FUN ❳*
*│*
*│▸* ${prefix}fitnah 
*│▸* ${prefix}fitnahpc
*│▸* ${prefix}hobby
*│▸* ${prefix}watak
*│▸* ${prefix}bisakah 
*│▸* ${prefix}apakah 
*│▸* ${prefix}kapankah 
*│▸* ${prefix}bagaimanakah 
*│▸* ${prefix}rate
*│▸* ${prefix}sangecek
*│▸* ${prefix}gaycek
*│▸* ${prefix}lesbicek
*│▸* ${prefix}gantengcek
*│▸* ${prefix}cantikcek
*│▸* ${prefix}jadian 
*│▸* ${prefix}ngewe
*│▸* ${prefix}artimimpi 
*│▸* ${prefix}artinama 
*│▸* ${prefix}wangy 
*│▸* ${prefix}truth
*│▸* ${prefix}dare
*│▸* ${prefix}cekbapak
*│*
*╰────────────⦁*

*╭─❲ PREMIUM ❳*
*│* 
*│▸* ${prefix}pinterest
*│▸* ${prefix}asupan 
*│▸* ${prefix}aspan 
*│▸* ${prefix}totag 
*│▸* ${prefix}chat  
*│▸* ${prefix}simi    New™
*│▸* ${prefix}caridoi   New™
*│▸* ${prefix}hidetag
*│▸* ${prefix}mediafire     New™
*│▸* ${prefix}ytdl 
*│*
*╰────────────⦁*

*╭─❲ DOWNLOAD ❳*
*│*
*│▸* ${prefix}ytmp4 
*│▸* ${prefix}ytmp3 
*│▸* ${prefix}play     New™
*│▸* ${prefix}tiktok     New™
*│▸* ${prefix}tiktoknowm     New™
*│▸* ${prefix}ig     New™
*│▸* ${prefix}igstory     New™
*│▸* ${prefix}twitter     New™
*│▸* ${prefix}twitterhd     New™
*│▸* ${prefix}fb     New™
*│▸* ${prefix}fbhd     New™
*│*
*╰────────────⦁* 

*╭─❲ SEARCH ❳*
*│*
*│▸* ${prefix}ytsearch 
*│▸* ${prefix}google 
*│▸* ${prefix}igstalk 
*│▸* ${prefix}gimage 
*│▸* ${prefix}wiki 
*│▸* ${prefix}kbbi 
*│▸* ${prefix}brainly
*│▸* ${prefix}wait     New™
*│▸* ${prefix}chara     New™
*│*
*╰────────────⦁*

*╭─❲ OTHER ❳*
*│*
*│▸* ${prefix}ping
*│▸* ${prefix}inspect 
*│▸* ${prefix}caripesan 
*│▸* ${prefix}kontak
*│▸* ${prefix}style 
*│▸* ${prefix}shorturl
*│▸* ${prefix}tourl
*│▸* ${prefix}zalgo     New™
*│▸* ${prefix}linkwa 
*│▸* ${prefix}listsewa Fix
*│▸* ${prefix}tospam 
*│▸* ${prefix}kodebahasa 
*│▸* ${prefix}listvn
*│▸* ${prefix}musik
*│▸* ${prefix}reportbug 
*│*
*╰────────────⦁*

*╭─❲ OWNER ❳*
*│*
*│▸* ${prefix}off 
*│▸* ${prefix}on
*│▸* ${prefix}bc
*│▸* ${prefix}bcgc    New™
*│▸* ${prefix}pcallmem    New™
*│▸* ${prefix}addstatus     New™
*│▸* ${prefix}status
*│▸* ${prefix}self
*│▸* ${prefix}public
*│▸* ${prefix}setthumb
*│▸* ${prefix}settarget
*│▸* ${prefix}setppbot     Fix
*│▸* ${prefix}setfakeimg
*│▸* ${prefix}setreply    
*│▸* ${prefix}setovo     New™     
*│▸* ${prefix}setgopay     New™
*│▸* ${prefix}setdana     New™
*│▸* ${prefix}setimageinfo     New™
*│▸* ${prefix}sendhidetag     New™
*│▸* ${prefix}adderror     New™
*│▸* ${prefix}addorder      New™
*│▸* ${prefix}addprem     Fix
*│▸* ${prefix}addrespon
*│▸* ${prefix}delrespon 
*│▸* ${prefix}listrespon
*│▸* ${prefix}delprem     Fix
*│▸* ${prefix}giftlimit
*│▸* ${prefix}resetlimit
*│▸* ${prefix}setcmd 
*│▸* ${prefix}delcmd 
*│▸* ${prefix}blockcmd 
*│▸* ${prefix}delblockcmd 
*│▸* ${prefix}delchat 
*│▸* ${prefix}clearall 
*│▸* ${prefix}clearallerror     New™
*│▸* ${prefix}clearalluser     New™
*│▸* ${prefix}listblockcmd
*│▸* ${prefix}listcmd
*│▸* ${prefix}listorder
*│▸* ${prefix}out
*│▸* ${prefix}autotyping 
*│▸* ${prefix}autoread
*│▸* ${prefix}autovn
*│▸* ${prefix}autobio     New™
*│▸* ${prefix}autoblockcmd     New™
*│▸* ${prefix}antichatbot
*│▸* ${prefix}anticall     Fix
*│▸* ${prefix}stopjadibot 
*│▸* ${prefix}listbot
*│▸* ${prefix}forward
*│▸* ${prefix}forwardtotal 
*│▸* ${prefix}join    Fix
*│*
*╰────────────⦁*

*╭─❲ MODE WAR ❳*
*│*
*│▸* ${prefix}bugv1 
*│▸* ${prefix}bugv2 
*│▸* ${prefix}bugv3 
*│▸* ${prefix}bugv4 
*│▸* ${prefix}bugv5     
*│▸* ${prefix}bugvn    
*│▸* ${prefix}amaterasu 
*│*
*╰────────────⦁*

*╭─❲ THANKS TO ❳*
*│*
*│* • Dittaz
*│* • Nina Kawai
*│* • Resta Gamteng :v
*│* • Zeeone Ofc
*│* • Yudha Perdana
*│* • Yogi PW
*│* • Decode Denpa
*│* • Fernazer
*│* • X - Dev Team
*│* • XChillDs & Yuzu
*│*
*╰────────────⦁*`
}