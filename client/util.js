import crypto from 'crypto'

const algothrimn = 'aes-256-cbc'
const key = '1eb7024a22c9eb8ef26977ca3337288119c903d9a9c2e4bfb2a1f26d045383c1'
const iv = crypto.randomBytes(16)

export function encrypt(text) {
    let cipher = crypto.createCipheriv(algothrimn, Buffer.from(key, 'hex'), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}


export function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

