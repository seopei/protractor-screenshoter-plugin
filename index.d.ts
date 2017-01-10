// Type definitions for protractor-screenshoter-plugin
// Project: https://github.com/azachar/protractor-screenshoter-plugin
// Definitions by: Sebastian Peischl <https://github.com/seopei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module ProtractorScreenshoter {

    /**
     * Add a new browser instance
     * @param name name of the browser instance
     * @param skipImageToAscii disable generating ASCII images (optional, default: false)
     * @returns {*} browser instance
     */
    export function addScreenshotBrowser(name:string):any;

    /**
     * Remove a browser instance
     * @param name browser name to remove
     */
    export function removeScreenshotBrowser(name:string):any;

    /**
     * Remove all browser instances (cleanup)
     */
    export function removeAllScreenshotBrowsers():void;
}
