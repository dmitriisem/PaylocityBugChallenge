/// <reference types="cypress" />
const fs = require('fs');
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('after:screenshot', (details) => {
  
    const fileDate = details.takenAt.replace('/:/g', '.') + '.png';

    const folderName = details.specName.split('/')[0];

    const specName = details.specName.split('/')[1];

    const newPath = `screenshots/${folderName}/${specName}/` + fileDate;

    return new Promise((resolve, reject) => {

      fs.rename(details.path, newPath, (err) => {
        if (err) return reject(err);

        resolve({ path: newPath });
      });
    });
  });
};
