const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
  projectId: 'kmrjht',
  e2e: {
    setupNodeEvents(on) {
        on('task', verifyDownloadTasks)
        on('task', { removeDirectory })
    },
    video: false,
    screenshot: true,
    "screenshotsFolder": "cypress/screenshots",
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false
  },
});