const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="akashsithum90@gmail.com"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_37_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUaExlWkZuTXpoellZbmI3UWRlSWovNFdjZTRlRVdGSmFnQnlZVzFuRTZ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg3NzMyMDQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MERCQTdCNUQyMThBOEQyODEzRDEyOUM2OTNDRDkyRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1ODYyNTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnBIWmYxM1ZSemlsZHdsNlB4cDNsZ1wiLFxuICBcInBob25lSWRcIjogXCJlYTUwYzUwMi0wNGMzLTRjZWQtYmQxZS0zYjUyODE5YmVkZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAyMzUsXG4gICAgICA1OCxcbiAgICAgIDkwLFxuICAgICAgMjM3LFxuICAgICAgMTU4LFxuICAgICAgMjAxLFxuICAgICAgMjQyLFxuICAgICAgMjAwLFxuICAgICAgMTc4LFxuICAgICAgMTc0LFxuICAgICAgMjIsXG4gICAgICAxNDgsXG4gICAgICAxNDQsXG4gICAgICAxMzUsXG4gICAgICAyNDQsXG4gICAgICAzOCxcbiAgICAgIDIzMCxcbiAgICAgIDI1NSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgOTUsXG4gICAgICAyMTMsXG4gICAgICA2OCxcbiAgICAgIDc4LFxuICAgICAgODYsXG4gICAgICAyMDQsXG4gICAgICA2NixcbiAgICAgIDEzNSxcbiAgICAgIDE3NyxcbiAgICAgIDE2NyxcbiAgICAgIDEwLFxuICAgICAgMTA3LFxuICAgICAgNDUsXG4gICAgICAxMTYsXG4gICAgICA3NixcbiAgICAgIDIwNSxcbiAgICAgIDIzNSxcbiAgICAgIDIwOSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0NEdUE4UWlLQzR0QVlZRHlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiYzZDS0N0Umk3dk1YMWJrV3hwVElaZWFnRzFRRmZxOE1ldVBxbEJ4VW5vPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImYyN1F1VllBMWF4ZUFaa0didzdwdGRQWHZiVmtTMXNYV1YwY3U4b0w5c3FJbmZaZUtjam5zUmJTY2NNUTAyaFhKQTNjYk5LUnpyUm1uNTNZNTZvb0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk92NCsxUFhxTG43WTBEekJONlAzMkxyZmNsaWR3R25hL1gxbkpXV0VHd3JFUU1MN2cwcW5iVCs0VGVvQkNmc2Jpa201empVVjB5TDcxRW1hb3k3NmdRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODc3MzIwNDA6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTE1MzY5MzI0NjA3OjE2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFrYXNoIFNpdGh1bVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3ODc3MzIwNDA6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTg2MjUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUdaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJR1UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1TFFvRTkvMnBldW9hREhYK1pHVi9ONjV4QzE1cFI0elBGYmp6b0NRbkYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMzc1MjAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJR1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaVlRkamN3RnNkWHpuOFdmbTNVclI3eWZqVkRDZkFIQ2ZGb1JkVVpKL3UwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMzc1MjAwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI0Njk5NjcwM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHVy5qc29uIjogIntcImtleURhdGFcIjpcInVubzdCaVcvdndpVWFkSzd5ZE84S1lEUk9QM25pQnZhbzF0YnpNdFVmcjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI0NzM4NDMxNFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHWC5qc29uIjogIntcImtleURhdGFcIjpcInIyM3ZTZHJ5S1Arb2s0RHZMaFdiUzUvUVVnK0FFZWt4V0E5ai9GYWpUMk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJR1kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRaDNNRHFqaDVFd3p5Szk2aWRKSjV5ZlVFWFRpMU90c3k1S2Rob1N3ZVprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMzc1MjAwLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwxMF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVNSV3dvbnViZjhnaHFWNjBCWUg3eHVReVdDcjdBYm5DQ01EdVdWazdSOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjM3NTIwMCxcImN1cnJlbnRJbmRleFwiOjEyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMTBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQyMDk1MDI3N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHYS5qc29uIjogIntcImtleURhdGFcIjpcImxIOGlnS3E5U1g1UCtjYlMrMy8xVEp3WFQwSkVidEx6UnRPQ2ZScWFUUjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzNzUyMDAsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwLDE0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NTEwNzg0MjNcIn0iCn0="  // PUT your SESSION_ID 


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
