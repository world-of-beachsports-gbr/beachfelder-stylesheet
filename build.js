'use strict';

let sass = require('node-sass');
let configFile = require('./config');
let fs = require('fs-extra');
let path = require('path');

let env = process.env.NODE_ENV || 'development';
let config = configFile[process.env.BUILD_TYPE || 'stylesheet'][env];

sass.render(config, function (err, result) {
    if (err) {
        throw new Error(err);
    }
    fs.outputFile(path.resolve(config.outFile), result.css);
    if(result.map) {
        fs.outputFile(`${path.resolve(config.outFile)}.map`, result.map);
    }
});

fs.copy('./src/base/font/oswald-regular/', './dist/oswald-regular/', (error) => {
  if (error) return console.error(error);
});

fs.copy('./src/base/font/pt-sans-regular/', './dist/pt-sans-regular/', (error) => {
  if (error) return console.error(error);
});