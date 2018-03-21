var SimpleCryptoJS = require('simple-crypto-js').SimpleCryptoJS;

var secretKey = 'some-unique-key';

var simpleCrypto = new SimpleCryptoJS(SECRET_KEY);
 
var plainText = 'Hello World!';
var chiperText = simpleCrypto.encrypt(plainText);
console.log("Encryption process...");
console.log("Plain Text    : " + plainText);
console.log("Cipher Text   : " + cipherText);
var decipherText = simpleCrypto.decrypt(cipherText);
console.log("... and then decryption...");
console.log("Decipher Text : " + cipherText);
console.log("... done.");

