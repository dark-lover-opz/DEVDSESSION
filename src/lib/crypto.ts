import { randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

export function generateIv(): Buffer {
    return randomBytes(16);
}

export function encryptIv(key: Buffer, iv: Buffer, data: string): string {
    const cipher = createCipheriv("aes256", key, iv);
    const encryptedMessage =
        cipher.update(data, "utf8", "hex") + cipher.final("hex");
    return encryptedMessage;
}

export function decryptIv(key: Buffer, iv: Buffer, data: string): string {
    const decipher = createDecipheriv("aes256", key, iv);
    const decryptedMessage =
        decipher.update(data, "hex", "utf8") + decipher.final("utf8");
    return decryptedMessage;
}
