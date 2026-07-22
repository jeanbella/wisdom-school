import { Sequelize, QueryTypes } from "sequelize";

export const generateString = (num) => {
  try {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#&";
    let result = "";
    const characterLength = characters.length;
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLength));
    }

    return result;
  } catch (err) {
    throw err;
  }
};
