
const { defineConfig } = require("cypress");
//const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
//const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    viewportWidth: 1000,
    viewportHeight: 660,
    // retries:{openMode:1,runMode:1},
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 4000,
    experimentalSessionAndOrigin: true,
   },
   video: false,
   videosFolder: "cypress/karegowd",
   env:{
    username:"Admin",
    password:"admin123{enter}",
    
   },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('before:run', async (details) => {
      //   console.log('override before:run');
      //   await beforeRunHook(details);
      // });

      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });
    
  },
});
