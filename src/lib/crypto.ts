import CryptoJS from "crypto-js";
const secretPass = process.env.NEXT_PUBLIC_SECRET_PASS as string;
console.log("SECRET PASS", secretPass);
export const encryptData = (data: any) => {
  const cipherText = CryptoJS?.AES?.encrypt(
    JSON.stringify(data),
    secretPass
  ).toString();
  return cipherText;
};

export const decryptData = (cipherText: any) => {
  let bytes = CryptoJS.AES.decrypt(cipherText, secretPass);
  const data = JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
  return data;
};
