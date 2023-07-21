"use strict";
const fs = require("fs");
const upath = require("upath");
const sh = require("shelljs");

module.exports = function renderAssets() {
    const sourceAssetsPath = upath.resolve(
        upath.dirname(__filename),
        "../src/assets"
    );

    const sourceImgPath = upath.resolve(
        upath.dirname(__filename),
        "../src/assets/img"
    );

    const destPath = upath.resolve(upath.dirname(__filename), "../dist/assets");

    // Copying other assets
    sh.cp("-R", sourceAssetsPath, destPath);

    // Copying favicon and apple-touch-icon to the dist directory root
    sh.cp(
        `${sourceImgPath}/favicon.ico`,
        upath.resolve(upath.dirname(__filename), "../dist/")
    );
    sh.cp(
        `${sourceImgPath}/apple-touch-icon.png`,
        upath.resolve(upath.dirname(__filename), "../dist/")
    );
};
