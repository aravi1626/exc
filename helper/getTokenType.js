const getTokenType = (tokenURI) => {
  let nftType;
  if (tokenURI == 1) {
    nftType = "legendary";
  } else if (
    tokenURI == 2 ||
    (tokenURI == 0 && (token == 1522 || 1523 || 1524))
  ) {
    if (token >= 0 && token < 8) {
      nftType = "ultraRare";
    }

    if (token > 8 && token < 21) {
      nftType = "ultraRare";
    }

    if (token === 1122) {
      nftType = "ultraRare";
    }

    if (token > 1521 && token <= 1525) {
      nftType = "ultraRare";
    }
  } else if (tokenURI == 3) {
    if (tokenId > 1500 && tokenId <= 1521) {
      tokenId = tokenId - 1500;
    } else if (tokenId === 1522) {
      tokenId = 1123;
    }
    nftType = "ultraRare";
  }

  return nftType;
};

module.exports = getTokenType;
