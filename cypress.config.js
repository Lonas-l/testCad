const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
  projectId: 'kmrjht',
  e2e: {
    setupNodeEvents(on, config) {
        // on('before:browser:launch', (browser , options) => {
        //     // options.args = options.args.filter(arg => arg !== '--disable-gpu')
        //     options.args.unshift('--ignore-gpu-blocklist')
        //     options.args.unshift('--enable-gpu-benchmarking')
        //     options.args.unshift('--enable-gpu-blocked-time')
        //     options.args.unshift('--enable-gpu-client-logging')
        //     options.args.unshift('--enable-gpu-client-tracing')
        //     options.args.unshift('--enable-gpu-command-logging')
        //     options.args.unshift('--enable-gpu-debugging')
        //     options.args.unshift('--enable-gpu-driver-debug-logging')
        //     options.args.unshift('--enable-gpu-memory-buffer-compositor-resources')
        //     options.args.unshift('--enable-gpu-memory-buffer-video-frames')
        //     options.args.unshift('--enable-gpu-rasterization')
        //     options.args.unshift('--enable-gpu-service-logging')
        //     options.args.unshift('--enable-gpu-service-tracing')
        //
        //     // const newArgs = args.filter(arg => arg !== '--disable-gpu')
        //     // newArgs.push('--ignore-gpu-blocklist')
        //     // console.log('newArgs == ' , newArgs)
        //     console.log('options == ' , options)
        //
        //     return options;
        // })
      on('task', verifyDownloadTasks)
      on('task', { removeDirectory })
    },
    experimentalRunAllSpecs: true,
  },
});