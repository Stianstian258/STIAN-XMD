const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "pair",
  'aliases': ["session", "pair", "paircode", "qrcode"],
  'reaction': '🪰',
  'categorie': "General"
}, async (_0x2ce843, _0x1c44fd, _0x32de8a) => {
  const {
    repondre: _0x2e61d5,
    arg: _0x8621a4
  } = _0x32de8a;
  try {
    if (!_0x8621a4 || _0x8621a4.length === 0) {
      return _0x2e61d5("єхαmplє usαgє: .cσdє 2677782xxxx.");
    }
    await _0x2e61d5("ᴡᴀɪᴛ ʜᴀᴘᴘɪɴᴇᴤᴤ ɪᴤ ɢᴇɴᴇʀᴀᴛɪɴɢ ʏᴏᴜʀ ᴘᴀɪʀ ᴄᴏᴅᴇ");
    const _0x386b0a = encodeURIComponent(_0x8621a4.join(" "));
    const _0x1ea92d = "https://njabulo-5778.onrender.com/code?number=" + _0x386b0a;
    const _0xb59e41 = await axios.get(_0x1ea92d);
    const _0x1b71f0 = _0xb59e41.data;
    if (_0x1b71f0 && _0x1b71f0.code) {
      const _0x40751a = _0x1b71f0.code;
      await _0x2e61d5('' + _0x40751a);
      await _0x2e61d5("ʜᴇʀᴇ ɪᴤ ʏᴏᴜʀ ᴘᴀɪʀ ᴄᴏᴅᴇ, ᴄᴏᴘʏ ᴀɴᴅ ᴘᴀᴤᴛᴇ ɪᴛ ᴛᴏ ᴛʜᴇ ɴᴏᴛɪᴈɪᴄᴀᴛɪᴏɴ ᴀʙᴏᴠᴇ ᴏʀ ʟɪɴᴋ ᴅᴇᴠɪᴄᴇᴤ.");
    } else {
      throw new Error("Invalid response from API.");
    }
  } catch (_0x21fdc6) {
    console.error("Error getting API response:", _0x21fdc6.message);
    _0x2e61d5("Error getting response from API.");
  }
});
