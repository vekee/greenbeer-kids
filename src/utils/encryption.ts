import * as CryptoJS from 'crypto-js'

// 暗号化キー
const secretKey = 'hello-green-kids'

// 文字列を暗号化する関数
export function encryptString(text: string): string {
  return CryptoJS.AES.encrypt(text, secretKey).toString()
}

// 暗号化された文字列を複合化する関数
export function decryptString(encryptedText: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}
