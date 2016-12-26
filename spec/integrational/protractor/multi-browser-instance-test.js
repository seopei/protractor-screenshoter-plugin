var protractorUtils = require('../../../index');

describe('angularjs homepage', function() {

  var firstBrowser = null;
  var secondBrowser = null;

  beforeAll(function () {
    firstBrowser = browser;
    protractorUtils.addScreenshotBrowser('first', firstBrowser);

    secondBrowser = browser.forkNewDriverInstance();
    protractorUtils.addScreenshotBrowser('second', secondBrowser);
  });

  afterAll(function () {
    protractorUtils.removeScreenshotBrowser('first');
    protractorUtils.removeScreenshotBrowser('second');
  });

  it('should open two browsers', function() {
    firstBrowser.get('http://www.angularjs.org');
    secondBrowser.get('http://www.angularjs.org');

    firstBrowser.element(by.model('yourName')).sendKeys('First Browser');
    var greeting = firstBrowser.element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello First Browser!');

    secondBrowser.element(by.model('yourName')).sendKeys('Second Browser');
    greeting = secondBrowser.element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Second Browser!');
  });
});
