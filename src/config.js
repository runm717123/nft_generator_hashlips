"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://NewUriToReplace";

// { name: "Background" },
// { name: "Eyeball" },
// { name: "Eye color" },
// { name: "Iris" },
// { name: "Shine" },
// { name: "Bottom lid" },
// { name: "Top lid" },

const layerConfigurations = [
  {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "FROGGY BACKGROUND" },
      { name: "CHARACTER" },
      { name: "COSTUME" },
      { name: "AKSESORIS KEPALA" },
      { name: "AKSESORIS KOSTUM" },
    ],
  },
  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "FROGGY BACKGROUND" },
      { name: "CHARACTER" },
      { name: "COSTUME" },
      { name: "HELM VIKING" },
      { name: "AKSESORIS KOSTUM" },
    ],
  },
  {
    growEditionSizeTo: 350,
    layersOrder: [
      { name: "FROGGY BACKGROUND" },
      { name: "CHARACTER" },
      { name: "COSTUME WITH HAMMER" },
      { name: "HELM VIKING" },
      { name: "AKSESORIS KOSTUM" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 250,
  height: 250,
};

const background = {
  generate: true,
  brightness: "80%",
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
};
