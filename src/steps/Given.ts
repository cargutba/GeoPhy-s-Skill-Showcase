import { Given } from 'cucumber';

import { expect } from 'chai';

Given(/I navigate to (.*)/, (urlPath: string) => {
    return browser.url(urlPath);
});
