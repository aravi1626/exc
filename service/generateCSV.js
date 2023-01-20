const FS = require('fs');
const getNFTOwners = require('./getNftOwner');
const getTokenType = require('../helper/getTokenType');

async function generateCSV(fileName, cursorValue) {
  const { cursor, result } = await getNFTOwners(cursorValue);

  let file = '';

  result.forEach(async (element, i) => {
    const tokenType = await getTokenType(element.token_id);
    console.log(
      '🚀 ~ file: generateCSV.js:14 ~ result.forEach ~ tokenType',
      tokenType
    );
    const objCsv = `${element.token_id},${element.owner_of},${tokenType}\n`;
    file += objCsv;
    // console.log('🚀 ~ file: generateCSV.js:18 ~ res ~ file', file);
  });
  try {
    await FS.appendFileSync(`./csv/${fileName}.csv`, file);
    console.log(`${fileName}.csv created`);
    return { cursor };
  } catch (error) {
    console.log('error on creating csv ####', error);
  }
}

module.exports = generateCSV;
