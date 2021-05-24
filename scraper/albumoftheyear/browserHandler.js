'use strict';

const puppeteer = require('puppeteer');

/**
 * Class: BrowserHandler
 *     Relaunch Browser when Closed
 *     Return false when Browser is Disconnected
 */

class BrowserHandler {
  constructor() {
    const launch_browser = async () => {
      this.browser = false;
      this.browser = await puppeteer.launch();
      this.browser.on('disconnected', launch_browser);
    };
    
    (async () => {
      await launch_browser();
    })();
  }
}

const waitForBrowser = browserHandler => new Promise((resolve, reject) => {
  const browser_check = setInterval(() => {
    if (browserHandler.browser !== false) {
      clearInterval(browser_check);
      resolve(true);
    }
  }, 100 );
});

module.exports = {
  BrowserHandler,
  waitForBrowser
};