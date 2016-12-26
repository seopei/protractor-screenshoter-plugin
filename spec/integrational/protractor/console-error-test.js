var protractorUtils = require('../../../index');

describe('angularjs homepage', function () {

  it('should generate console errors', function () {
    browser.get('http://www.angularjs.org');
    element(by.model('yourName')).sendKeys('Julie');
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');

    browser.executeScript('console.error("sample error")');
    browser.executeScript('console.warn("sample warning")');
    browser.executeScript('console.info("sample info")');
    browser.executeScript('console.log("sample log")');
  });

  it('should generate console errors in 2 browsers', function () {
    var firstBrowser = browser;
    protractorUtils.addScreenshotBrowser('first', firstBrowser);
    firstBrowser.get('http://www.angularjs.org');

    var secondBrowser = browser.forkNewDriverInstance();
    protractorUtils.addScreenshotBrowser('second', secondBrowser);
    secondBrowser.get('http://www.angularjs.org');

    firstBrowser.element(by.model('yourName')).sendKeys('Julie');
    var greeting = firstBrowser.element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');

    secondBrowser.executeScript('console.error("sample second browser error")');
    secondBrowser.executeScript('console.warn("sample second browser warning")');
    secondBrowser.executeScript('console.info("sample second browser info")');
    secondBrowser.executeScript('console.log("sample second browser log")');
  });
});
