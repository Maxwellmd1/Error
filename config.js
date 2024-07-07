//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "emmanuelagbonye@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://wa.me/qr/MY2JIUSBX5FJD1";
global.gurl = process.env.GURL || "https://wa.me/qr/MY2JIUSBX5FJD1";
global.website = process.env.GURL || "https://wa.me/qr/MY2JIUSBX5FJD1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ac60b32f3fcb180747985.jpg";
global.devs = "2349120730021,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "2349164661375";
global.sudo = process.env.SUDO || "2349164661375";
global.owner = process.env.OWNER_NUMBER || "2349120730021,2349164661375";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a1f712400b07d9193c5da.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349120730021,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9C";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdEZm1KUnB3aitoemRob1dGbVgvTk9CQVhWbkxkWCt6VElOSmZQSzhIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NDbjFjeFdEMVE1dWhPQk9peW5VcGlDRXd1bXorUTdtZkZVUEttMFVSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3REJLR1dWWDlmSFJEZVlSY21tYjhlVnI4d09oZWpQUjhEVVlhQkRQeTFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dGYvN296YTZ3U3IvdUZyUzczRGY2b3I0R2lrTm9ka1F4RjJadTRFR0dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktINGtuREFHNHVjNE5ZcVpKTVlrVFA0dWpUQ202cWtSYzBOYWJJVG5NVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNSbFNvdk03Tm81Q3RqSVdCTy96c3hSOURjeVVpeHNvU1I3NFcwcmxGVXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEs5eEpFSjl2eTJHc1VKM2tEMXoyZEVhQ0ZzRkNLYzVLOWVQUUM2QXFrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHQ0L0FMSSszblVxTmhkb2Fza0t5VU5xM05MN3JDYXhyTkVyUUQ3Rll6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZEL3pNSGVGd0RkSDNIWGlqMERxc3ZDNFhibFU2S2Q1MFllWFBIS2lmYVNPU21xd0VBcTJaQ1MwNGJVYmxnMG5vcTduZWtoeG1MaC95QzNBVllhd2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJZZGM3SlR0L3dBK1JQbWViREM0bzNPYno1ODRLZzFCQ29wdFhydDNCNTZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwUVNwbnNUelFjNjlaWFl4VDQ1cGxBIiwicGhvbmVJZCI6ImI1NDgzMWYwLTQzOTgtNGJiYi04ZDhhLTQ0ZjQ3NmQxMTE4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRHVwTHNoSGs3M2I4UER0ekw4NlJYSDUyeXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05JNVd2MFcvdWp6bmpYRkxOWmd4VHJkd1g4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJWSlNWVDhUIiwibWUiOnsiaWQiOiIyMzQ5MDYxMzgyNTk1OjU1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQK0xodFFIRUt6bXFiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCL0JiV3JVbFJUNWJBaTVTSEV5UGsxaGFHQXRwVXg3VkNkcVgxREJkL1I4PSIsImFjY291bnRTaWduYXR1cmUiOiJaSDYzTXdZenRwTTBIanNWUFhzNzV1RUZmYzhnTy81WEpIYmttSEhLdEdtcTVSbnlJTEJZNXFYd3lzVGpVOWs3Ti9OTDFTM3daaTJZdVdYNUNFajdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZllaNVhXS0hkOTIrOUlzVzBaRG5EWmRIMnpCSTVDNXo3VXBLR1ZoUjB2anVwUVk0UzJTOGdUOExvRDhsS3BIcEw4aDNsR2tQam03enFzQXVLbkR5Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYxMzgyNTk1OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFmd1cxcTFKVVUrV3dJdVVoeE1qNU5ZV2hnTGFWTWUxUW5hbDlRd1hmMGYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNDk0OTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHhZIn0="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"𖣘𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫♡●",
  author: process.env.STICKER_AUTHOR || "𖣘𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫♡●",
  packname: process.env.STICKER_NAME || "✅",
  botname: process.env.BOT_NAME || "𖣘𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫♡●",
  ownername: process.env.OWNER_NAME || "Maxwell",
  errorChat: process.env.ERROR_CHAT || "💔",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


