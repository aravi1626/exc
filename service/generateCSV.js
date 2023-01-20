const FS = require('fs');
const getNFTOwners = require('./getNftOwner');
const getTokenType = require('../helper/getTokenType');

let data = [];

const generate = async (fileName) => {
  data.forEach(async (element, i) => {
    const tokenType = await getTokenType(element.token_id);
    console.log(
      '🚀 ~ file: generateCSV.js:14 ~ result.forEach ~ tokenType',
      tokenType
    );
    const objCsv = `${element.token_id},${element.owner_of},${tokenType}\n`;

    FS.appendFile(`./csv/${fileName}.csv`, objCsv, (err) => {
      if (err) console.log("🚀 ~ coundn't append data ~ err", err);
      console.log('the data was appended to file');
    });
  });
};

async function generateCSV(fileName, cursorValue) {
  const { cursor, result } = await getNFTOwners(cursorValue);
  console.log('🚀 ~ file: generateCSV.js:7 ~ generateCSV ~ cursor', cursor);
  if (cursor && data.length < 1527) {
    data = [...data, ...result];
    generateCSV(fileName, cursor);
  } else {
    generate(fileName);
  }

  console.log(data.length, 'total assets');
}

module.exports = generateCSV;
