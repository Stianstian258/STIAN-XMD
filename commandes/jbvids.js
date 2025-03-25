const { zokou } = require("../framework/zokou");
const axios = require("axios");
const ytSearch = require("yt-search");
const conf = require(__dirname + "/../set");
zokou({
  'nomCom': "play1",
  'aliases': ["song", "playdoc", "audio", "mp3"],
  'categorie': "Search",
  'reaction': "🎵"
}, async (_0x2bfdef, _0x539240, _0x2e0500) => {
  const {
    arg: _0x4dc2f0,
    ms: _0x23f171,
    repondre: _0xa189ab
  } = _0x2e0500;
  if (!_0x4dc2f0[0]) {
    return _0xa189ab("Please provide a video name.");
  }
  const _0x21387f = _0x4dc2f0.join(" ");
  try {
    const _0x1b1f38 = await ytSearch(_0x21387f);
    if (!_0x1b1f38 || !_0x1b1f38.videos.length) {
      return _0xa189ab("No video found for the specified query.");
    }
    const _0x48a96b = _0x1b1f38.videos[0];
    const _0x2da2f3 = _0x48a96b.url;
    const _0x34d921 = async _0x44dc78 => {
      try {
        const _0x130eff = await axios.get(_0x44dc78);
        return _0x130eff.data;
      } catch (_0x25b98b) {
        console.error("Error fetching data from API:", _0x25b98b);
        return {
          'success': false
        };
      }
    };
    const _0x5f4e4f = ["https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x2da2f3), "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + encodeURIComponent(_0x2da2f3), "https://www.dark-yasiya-api.site/download/ytmp3?url=" + encodeURIComponent(_0x2da2f3), "https://api.giftedtech.web.id/api/download/dlmp3?url=" + encodeURIComponent(_0x2da2f3) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x2da2f3)];
    let _0x2e54aa;
    for (const _0x3fbf2c of _0x5f4e4f) {
      _0x2e54aa = await _0x34d921(_0x3fbf2c);
      if (_0x2e54aa && _0x2e54aa.success) {
        break;
      }
    }
    if (!_0x2e54aa || !_0x2e54aa.success) {
      return _0xa189ab("Failed to retrieve download URL from all sources. Please try again later.");
    }
    const _0x28e8a6 = _0x2e54aa.result.download_url;
    const _0x1a4c2a = _0x2e54aa.result;
    const _0x40d585 = [{
      'image': {
        'url':  _0x322f75[0].thumbnail
        },
          'caption': "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯}
      };
      'audio': {
      'url': _0x28e8a6
      'mimetype': "audio/mp4",
      'contextInfo': {
        'externalAdReply': {
          'title': _0x1a4c2a.title,
          'body': _0x1a4c2a.title,
          'mediaType': 0x1,
          'sourceUrl': conf.GURL,
          'thumbnailUrl': _0x48a96b.thumbnail,
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'image': {
        'url':  _0x322f75[0].thumbnail
        },
          'caption': "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯}
      };
      'document': {
      'url': _0x28e8a6
      'mimetype': "audio/mp4",
      'contextInfo': {
        'externalAdReply': {
          'title': _0x1a4c2a.title,
          'body': _0x1a4c2a.title,
          'mediaType': 0x1,
          'sourceUrl': conf.GURL,
          'thumbnailUrl': _0x48a96b.thumbnail,
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
     }];
    for (const _0xc62007 of _0x40d585) {
      await _0x539240.sendMessage(_0x2bfdef, _0xc62007, {
        'quoted': _0x23f171
      });
    }
  } catch (_0x3b8949) {
    console.error("Error during download process:", _0x3b8949);
    return _0xa189ab("Download failed due to an error: " + (_0x3b8949.message || _0x3b8949));
  }
});
