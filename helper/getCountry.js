let UK = []; //United Kingdom
let JAPAN = []; //Japan
let GERMANY = []; //Germany
let ITALY = []; //Italy
let SPAIN = []; //Spain

const getCountry = (arr) => {
  arr.forEach((element) => {
    const { attributes } = JSON.parse(element.metadata);
    const { value: Country } = attributes[0];

    if (Country == 'United Kingdom') {
      UK.push(element.owner_of);
    }

    if (Country == 'Japan') {
      JAPAN.push(element.owner_of);
    }

    if (Country == 'Germany') {
      GERMANY.push(element.owner_of);
    }
    if (Country == 'Italy') {
      ITALY.push(element.owner_of);
    }
    if (Country == 'Spain') {
      SPAIN.push(element.owner_of);
    }
  });

  return {
    UK,
    JAPAN,
    GERMANY,
    ITALY,
    SPAIN,
  };
};

module.exports = getCountry;
