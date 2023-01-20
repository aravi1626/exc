const FS = require('fs');
const getNFTOwners = require('./getNftOwner');
const getTokenType = require('../helper/getTokenType');

let data = [];
let owners = [];

const generate = async (fileName) => {
  data.forEach(async (element, i) => {
    const tokenType = await getTokenType(element.token_id, fileName);

    if (fileName === tokenType) {
      console.log(
        '🚀 ~ file: generateCSV.js:14 ~ result.forEach ~ tokenType',
        tokenType
      );

      const objCsv = `${element.token_id},${element.owner_of},${tokenType}\n`;

      FS.appendFile(`./csv/${fileName}.csv`, objCsv, (err) => {
        if (err) console.log("🚀 ~ coundn't append data ~ err", err);
        console.log('the data was appended to file');
      });
    } else if (fileName === 'all') {
      console.log(
        '🚀 ~ file: generateCSV.js:14 ~ result.forEach ~ tokenType',
        tokenType
      );

      const objCsv = `${element.token_id},${element.owner_of},${tokenType}\n`;

      FS.appendFile(`./csv/${fileName}.csv`, objCsv, (err) => {
        if (err) console.log("🚀 ~ coundn't append data ~ err", err);
        console.log('the data was appended to file');
      });
    }
  });
};

async function generateCSV(fileName, cursorValue) {
  console.log('🚀 ~ file: generateCSV.js:32 ~ generateCSV ~ data', data.length);
  const { cursor, result } = await getNFTOwners(cursorValue);
  if (cursor && data.length < 1526) {
    data = [...data, ...result];
    generateCSV(fileName, cursor);
  } else {
    data = [...data, ...result];
    console.log('🚀 ~ file: generateCSV.js:7 ~ generateCSV ~ cursor', cursor);
    console.log(
      '🚀 ~ file: generateCSV.js:32 ~ generateCSV ~ data',
      data.length
    );
    generate(fileName);
  }
}

module.exports = generateCSV;
