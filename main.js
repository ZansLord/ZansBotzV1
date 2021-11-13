const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const client = new WAConnection()
const qrcode = require("qrcode-terminal")
const util = require('util')
const figlet = require('figlet')
//const term = require('terminal-kit').terminal
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { exec } = require('child_process')
const fs = require("fs");
//const { keepalive } = require("./keepalive");
const { banner, start, success, getGroupAdmins,close} = require("./lib/functions");
const { color } = require("./lib/color");
const fetch = require("node-fetch");
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const extream = JSON.parse(fs.readFileSync('./database/extream.json'))
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const{ ngebucin }= require("./message/messages.js");
const cintakupadamu = ngebucin[Math.floor(Math.random() * ngebucin.length)]
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned");
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");

const settings = JSON.parse(fs.readFileSync('./settings.json'))
Antidel = settings.Antidel






async function starts() {
	client.autoReconnect = ReconnectMode.onConnectionLost
	client.version = [2, 2143, 3]
	client.logger.level = 'warn'
	console.log(`  ©`,`「`,color(`𝗘𝗫𝗧𝗥𝗘𝗔𝗠`,'red'),`」`)
	client.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Bwang'))
	})

	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
	start('1', `connecting...`)
	})
	client.on('open', () => {
	success('1', `[■■■■■■■■■■■■■■■] connected`)
	}) 
	await client.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
  
  
  
  






  
  
  
  
  
  
  teks = `https://chat.whatsapp.com/EyOOD9X6mInFKHlUUUwFd7`
 client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 //console.log(color('|WRN|', 'yellow'), color('Yahaha masuk grup', 'cyan'))
	
  client.on("group-update", async (anu) => {
   if(extream.includes(anu.jid)) return
   if(!JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid)) return
    metdata = await client.groupMetadata(anu.jid);
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\nDeskripsi Baru : ${anu.desc}`;
      client.sendMessage(metdata.id, teks, MessageType.text, {
        contextInfo: { mentionedJid: [tag] },
      });
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
  });
  
  client.on('group-participants-update', async (anu) => {

        
    	groupMet = await client.groupMetadata(anu.jid)
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];
      
        
        try {
            console.log(anu);
            mem = anu.participants[0];
            try {
                var pp_user = await client.getProfilePicture(mem)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            };
  try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }

if (anu.action == "add" && mem.includes(client.user.jid) && extream.includes(anu.jid)) {
        client.sendMessage(anu.jid, `${cintakupadamu}\n\n Salken yak gaes`, text);
      }
      
      
       //!mem.includes(client.user.jid)
      if (anu.action == "add" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid) ) {
      if(extream.includes(anu.jid)) return
        mdata = await client.groupMetadata(anu.jid)
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        
        nomere = num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `Halo ${anu_user} \n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\nAnd Following Rules Group`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${nomere}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`
        );
        buttons = [
          { buttonId: `y`, buttonText: { displayText: "Oke siap" }, type: 1 },
          { buttonId: `#bully ${nomere}`, buttonText: { displayText: "Bully yuk" }, type: 1 } ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `Selamat datang di grup\nMoga betah ya kak `,
          footerText: "Auto Update",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      

      if (anu.action == "remove" && JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid)) {
       if(extream.includes(anu.jid)) return
        mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Asik beban grup keluar \nKena mental dia :v`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/tCTkRNpf/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg`
        );
        buttons = [{ buttonId: `y`, buttonText: { displayText: "Nitip gorengan" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Auto Update",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      
     client.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
	blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
	})
    
  } catch (e) {
            console.log('Error : %s', color(e, 'red'))
        }
        
    });
  
  
//copas dari zeeone :v
  client.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if(!Antidel) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0] 
xdev.sendMessage(m.key.remoteJid, `\`\`\` A N T I  D E L E T E \`\`\`

 Name : @${m.participant.split("@")[0]}
 Day :  ${week} ${calender}
 Time : ${jam}
 Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

client.copyNForward(m.key.remoteJid, m.message)
})
  
  
  
  
    client.on('chat-update', async (message) => {
        require('./index.js')(client, message)
    })
};


starts()













