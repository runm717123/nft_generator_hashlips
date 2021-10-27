"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "the gundul's series";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "gndl_Background" },
      { name: "gndl_Body" },
      { name: "gndl_custume_ninja" },
      { name: "gndl_Mata" },
      // { name: "gndl_syal" },
    ],
  },
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "gndl_Background" },
      { name: "gndl_Body" },
      { name: "gndl_Mata" },
      { name: "gndl_Mulut" },
      { name: "gndl_helm_soldier" },
      { name: "gndl_costume_soldier" },
      // { name: "gndl_syal" },
    ],
  },
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "gndl_Background" },
      { name: "gndl_Body" },
      { name: "gndl_Mata" },
      { name: "gndl_Mulut" },
      { name: "gndl_rambut" },
      { name: "gndl_costume" },
      // { name: "gndl_syal" },
    ],
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const format = {
  width: 720,
  height: 720,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
};
