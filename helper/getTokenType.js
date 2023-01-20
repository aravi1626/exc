const { alpineAbi } = require('../constants/Abi/alpine');

const PROVIDER = `https://mainnet.infura.io/v3/adfeab0dfdc44dbd8aac83b05c113d9e`;
const CONTRACT_ADDRESS = `0xf4CCaC05F220bfAA79DB04B23B46FBB2F5E2eeaC`;
const CONTRACT_ABI = alpineAbi;

const Web3EthContract = require('web3-eth-contract');
Web3EthContract.setProvider(PROVIDER);

const contract = new Web3EthContract(CONTRACT_ABI, CONTRACT_ADDRESS);

const getTokenType = async (id, nftypeName) => {
  let nftType;
  let token = Number(id);
  let tokenId = Number(id);
  const tokenURI = await contract.methods.NFTtype(tokenId).call();

  if (tokenURI == 1 && (nftypeName === 'legendary' || nftypeName === 'all')) {
    nftType = 'legendary';
  } else if (
    ((nftypeName === 'ultraRare' || nftypeName === 'all') && tokenURI == 2) ||
    (tokenURI == 0 && (token == 1522 || 1523 || 1524))
  ) {
    if (token >= 0 && token < 8) {
      nftType = 'ultraRare';
    }

    if (token > 8 && token < 21) {
      nftType = 'ultraRare';
    }

    if (token === 1122) {
      nftType = 'ultraRare';
    }

    if (token > 1521 && token <= 1525) {
      nftType = 'ultraRare';
    }
  } else if (
    (nftypeName === 'common' || nftypeName === 'all') &&
    tokenURI == 3
  ) {
    if (tokenId > 1500 && tokenId <= 1521) {
      tokenId = tokenId - 1500;
    } else if (tokenId === 1522) {
      tokenId = 1123;
    }
    nftType = 'common';
  }

  return nftType;
};

module.exports = getTokenType;
