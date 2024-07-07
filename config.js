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
global.sudo = process.env.SUDO_NUMBERS || "2349120730021";
global.sudo = process.env.SUDO || "2349120730021";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUwrWE1BdkxkREkxSDhWR29FOHJVNWRXWWRNakNNT1pneit6c1NJRThGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1lQYlJKUlBoV1lGNTcyUWhOTHVXeUNaV2ErSi9IdXpCdFViN2FjcFFUaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R1N3WDh3ZW9xbVliSmo0ZFFLa25OaTBaSzd2ZkJycE8reHM2MGRsR25ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Z0ZwaDJrdnpKNDlLL3RZQUtTcEM0azlWakNvRjVaMnRYZWp5d3pWY3dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVMRVBMNFRQZVhvaHpjY1JaenVsRU1MOXptN0FudElZb1J6ZkM4TzdIbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl6enZnMXpHMk5DV1ppdmgxblFOTTlpckdYSTJSYWNtN3BrVmFLU2wxRkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VPZkZZdjQzSHBtWW1lekdETkFsdXYvQ3l3YmJLT0Q2RS9WWHlIWEdrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnBWYURoeklvQ3RuR3R2TFpUcXc4T040Sy9iR3J2TjVEQkF2Vk1iMjNHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd0a2h0Uy9OZFBWSEY0VGt0eXR2alhzWjVlajcrZHMzU0c0RFJvWkIxdzVyNE9OSStWMU43ZTllbERURG01ODZ2UXdUVC9SeU1uTFFhMGhsOWZ5TERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IjJsUVZPSnVpaU5TY25objF4c3pMcWFWM05UclpBQVFNdFFvMzJCTHZmUXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMDczMDAyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQTNEMEUwRDFENkEyMEMxNjlGQjdGRUQ4RjczNUMxOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzc2OTI3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrTFo2NUpxR1QzU0hjSHYtekpnLXBBIiwicGhvbmVJZCI6IjFiZmU4Yjk0LWEzOGUtNDBlNi05ZWIyLTU2NzAzZjBiZmRjNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVC9LaGZ6ZVVpKzBTbDhrV1JqbFZJT1hNT3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEhYS0FDWHVyK2g5TlI5VDh0WVVrVStsbjhVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhFMkxTWTkyIiwibWUiOnsiaWQiOiIyMzQ5MTIwNzMwMDIxOjgwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCWo5jwnZG08J2RqPCdkb/wnZG+8J2RrPCdkbPwnZGzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZjQvNG9HRU0rOHE3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKeVVqZVZrVjk3dWpQZmpVd3FwdWdpbzVvYkZKWS9wclpBTUppV1Fpd1NNPSIsImFjY291bnRTaWduYXR1cmUiOiJ5UC9waUpUWkZ3dXNaQmxhNmlxYTg0b2hVcHBxVzZnT21yMW92N1JuaFJvTTJYYUNSb3JyWHNZMGs0MW1XTXo3bC9XbEJndFlISjJMUGd4eVJFbTlCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVWkvK1BCMWdNNm9IK0prMWFHczBFdTNYb2tzN3hZZk9IZFRSNWk5VUsxbGRsQUJXTU02dE85ZUhtSEc2bTNXQjJoa0VmMGtWRk41NkdKL3JXaGpJQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTIwNzMwMDIxOjgwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNjbEkzbFpGZmU3b3ozNDFNS3Fib0lxT2FHeFNXUDZhMlFEQ1lsa0lzRWoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNzY5MjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTdHIn0="
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


