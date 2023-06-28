const mapE = new Map();
const mapD = new Map();

var encode = function (longUrl) {
  if (mapE.has(longUrl)) {
    return mapE.get(longUrl);
  }

  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let tinyUrl = '';
  do {
    tinyUrl = '';
    for (let i = 0; i < 6; i++) {
      tinyUrl += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (mapD.has(tinyUrl));
  mapE.set(longUrl, tinyUrl);
  mapD.set(tinyUrl, longUrl);
  return tinyUrl;
};


var decode = function (shortUrl) {
  return mapD.get(shortUrl);
};

console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')));
console.log(decode(encode('https://leetcode.com/problems/ign-tinyurl')));
console.log(decode(encode('https://leetcode.com/problems/dign-tinyurl')));
console.log(mapE);
