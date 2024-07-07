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
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a1f712400b07d9193c5da.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349120730021,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9C";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eInR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5TZnZEcnpwa0NyTUZXeVoyZEQ4MUpCZy95QmVrWlhrMmNOMTIybElYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzhpVVVCU0RCOSsvbXQ2M1o5ZHE3SkR4aDRqV3RKUGsydnpFdFlkOGdGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RmlGSnZjVjR6WlhIUGdZc3R1VVg2aGVhU2ErL25vZkpYbzlCcGR5TG1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvYUxwdVVUNHd6Sm5ZQzYrTFcwcUxFTlZKaUVPQkl5SHhnZmZvTC9hQ0NZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFHU1JzeTl2aS9xR3lxYkJTenpSRmRrcnJOdzNMSzFwTGlPUWpKSUtibTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNYVJyWDEzdVRhMG80RTU2d1Z5N3RZRnRwdlJJdXhrbCtDNlpmRENHbEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dadXVKb0NjeUhmZ3JvNW9vT04vSW1GOHNUdFhNTlFFR0NwVlhMRVZsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkNUSjdlcFBiL3RWZ1Yvb3Y4bDFnQXNBNG1HOHdjcjhIUTIrS1pwdW93Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJBdWlFa3llZ0hjL0twSzQyakR0eVR0SlQ4WDcreVduVloxN2lzZ0ROVVRWb2J2ZnNxcU0xMmwxdXdqMXIvOWs2TlFmNS9CeHFqM3IwaUc1bktxMGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiRm84T3pGd0FXZ3RMZWJGMWo5RjRIcDBNME5aK09JWU1kR25nODlBdGZEbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTIwNzMwMDIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjREMDZFMzU4NzkzMTdDQkUyNEQ5NDlGQzQyNkVDQTIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzNDEyNDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjB4TnNhZWZJUXo2MXJzSmFtT0NVbEEiLCJwaG9uZUlkIjoiMzRkYmNlOGQtYTAxZS00ODQ4LWFmZGYtZGY5N2QyMGFlODFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRwcUphczVUQjZQbGg3OTU0cTV3bWtsWlYyWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdGpHUmkyZTVUY213UnBtNkhKd2lRalZMRWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1JXRUtDNDYiLCJtZSI6eyJpZCI6IjIzNDkxMjA3MzAwMjE6NzhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liNC80b0dFT2lscWJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikp5VWplVmtWOTd1alBmalV3cXB1Z2lvNW9iRkpZL3ByWkFNSmlXUWl3U009IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNRVmxucjNUekpoTS9CcExjMzY0SVVidC9BQ21Tdk1Ta2xaQU9SVEZPSktZdVdURVF6QlNtby82N2VzMVBLeEZqclpzODZWb2c4S201TkhYN2l5SEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNeUNEY2tYUW5JQ2xNNWxJNHFLWER5QlpGQXhqRVRSL0k1SXRGNUtyOHhTWEE3QnY2ZW4yQTRCMS9LZ29wd21hYm5MUGIyWEtBYzg0dlZmL3lJOWFoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjA3MzAwMjE6NzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2NsSTNsWkZmZTdvejM0MU1LcWJvSXFPYUd4U1dQNmEyUURDWWxrSXNFaiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM0MTIzNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJN0cifQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || "⚡",
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


