const crypto = require('crypto');
// yeh crypto.randombytes secret keybytes ko hexa ma convert kare ga
const Secretkey=crypto.randomBytes(32).toString('hex');
module .exports=Secretkey;