const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="akashsithum90@@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94787732040";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_10_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDczLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIndCZ1M3cU1TTWZWbzh6V3ZGOGZ3RjltOXdHejJVVjljbDhLT2ZISXRmZmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODc3MzIwNDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUyOEM3ODgyMTY0NzgyQkFGMkNDM0UzMDZCQURDOTIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDMzNjI0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg3NzMyMDQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRUVDQjdENjk0OTZCMDkzNEYxMkIwMjFCRTdFMTM1Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMzYyNDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0xvNHJMVGFRSmlpOEctLVM2UTQ1UVwiLFxuICBcInBob25lSWRcIjogXCJjMzgyODM0NS1mY2Y3LTRkNzAtOGNmYi04OWQ5M2YwMGE0ZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAyNTAsXG4gICAgICAxMTgsXG4gICAgICA4MCxcbiAgICAgIDEyLFxuICAgICAgNzIsXG4gICAgICAxMTQsXG4gICAgICAyMjAsXG4gICAgICAyMDcsXG4gICAgICAxMDQsXG4gICAgICAxNjUsXG4gICAgICA5MixcbiAgICAgIDQwLFxuICAgICAgMjM0LFxuICAgICAgMTg4LFxuICAgICAgMTgyLFxuICAgICAgMTQxLFxuICAgICAgMzMsXG4gICAgICA5OCxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMTAsXG4gICAgICA0OSxcbiAgICAgIDIyNSxcbiAgICAgIDEyMixcbiAgICAgIDIzMCxcbiAgICAgIDE3NCxcbiAgICAgIDY0LFxuICAgICAgMjM3LFxuICAgICAgMTg4LFxuICAgICAgMjMxLFxuICAgICAgMTM5LFxuICAgICAgNjgsXG4gICAgICA1MixcbiAgICAgIDE2OCxcbiAgICAgIDM2LFxuICAgICAgMTM2LFxuICAgICAgMTE4LFxuICAgICAgMTcwLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ0R1QThROFA2b3RBWVlEQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJjNkNLQ3RSaTd2TVgxYmtXeHBUSVplYWdHMVFGZnE4TWV1UHFsQnhVbm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3JqM3JPS2dIMmJkMEtZMmFwSjZJUytHWHZxWXl2RUNWUFFUcXpRdW5XMnQ5TDk2aHRtaWhTNHlHell6dmZBdWRsc09EbUFZQk5oTkJTMm5qUjhlQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV056LzRnajdiK1Y5UHdSY0RoSDlkVzZMU0c2SWRzQ0pJUGNMeU5KV1hobGJ4dmo1elRYajdFYVlUVlpzUFBYcGlNT3RpcUVzcGxnaW5JS0g2VjhyQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NzczMjA0MDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI5MTUzNjkzMjQ2MDc6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWthc2ggU2l0aHVtXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NzczMjA0MDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMzYyNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJR1lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHVS5qc29uIjogIntcImtleURhdGFcIjpcInVMUW9FOS8ycGV1b2FESFgrWkdWL042NXhDMTVwUjR6UEZianpvQ1FuRjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHVi5qc29uIjogIntcImtleURhdGFcIjpcIlpWVGRqY3dGc2RYem44V2ZtM1VyUjd5ZmpWRENmQUhDZkZvUmRVWkovdTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIxNzIwMjQ2OTk2NzAzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdXLmpzb24iOiAie1wia2V5RGF0YVwiOlwidW5vN0JpVy92d2lVYWRLN3lkTzhLWURST1AzbmlCdmFvMXRiek10VWZyOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjM3NTIwMCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjQ3Mzg0MzE0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdYLmpzb24iOiAie1wia2V5RGF0YVwiOlwicjIzdlNkcnlLUCtvazREdkxoV2JTNS9RVWcrQUVla3hXQTlqL0ZhalQyTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjM3NTIwMCxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHWS5qc29uIjogIntcImtleURhdGFcIjpcIlFoM01EcWpoNUV3enlLOTZpZEpKNXlmVUVYVGkxT3RzeTVLZGhvU3dlWms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyOTYxMDQwOTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
