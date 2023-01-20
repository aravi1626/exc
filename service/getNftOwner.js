const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const address = "0xf4CCaC05F220bfAA79DB04B23B46FBB2F5E2eeaC";
const chain = EvmChain.ETHEREUM;

(async () => {
  await Moralis.start({
    apiKey: "ShTDWnF1e21Z3sZVtkA5nDCWKcQihUrVIH3VJLabbFxXdjlVluJuwtxpWRRASjsu",
    // ...and any other configuration
  });
})();

const getNftOwner = async (cursorValue) => {
  let response;
  if (cursorValue) {
    response = await Moralis.EvmApi.nft.getNFTOwners({
      address,
      chain,
      limit: 100,
      cursor: cursorValue,
    });
  } else {
    response = await Moralis.EvmApi.nft.getNFTOwners({
      address,
      chain,
      limit: 100,
    });
  }

  return response.toJSON();
};

module.exports = getNftOwner;
