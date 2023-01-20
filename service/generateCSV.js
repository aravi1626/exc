const FS = require("fs");
const getNFTOwners = require("./getNftOwner");
const getTokenType = require("../helper/getTokenType");

async function generateCSV(fileName, cursorValue) {
  const { cursor, result } = await getNFTOwners(cursorValue);
  // console.log("🚀 ~ file: index.js:18 ~ storeOwners ~ cursor", cursor);

  let file = "";

  result.forEach((element) => {
    const tokenType = getTokenType(element.token_id);
    const objCsv = `${element.token_id},${element.owner_of},${tokenType}\n`;
    file += objCsv;
  });

  try {
    await FS.appendFileSync(`./csv/${fileName}.csv`, file);
    console.log(`${fileName}.csv created`);
    return { cursor };
  } catch (error) {
    console.log("error on creating csv ####", error);
  }
}

module.exports = generateCSV;
