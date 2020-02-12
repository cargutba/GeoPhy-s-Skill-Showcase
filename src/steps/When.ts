import { When } from 'cucumber';

import { expect } from 'chai';

import LoginPage from '../pages/LogInPage';
import SearchPage from '../pages/SearchPage';
import SearchResultPage from '../pages/SearchResultPage';

When(/I input the email address (.*)/, (emailAddress: string) => {
    LoginPage.setUsername(emailAddress);

    expect(LoginPage.username.getValue()).to.eq(emailAddress);
});

When(/I input the password (.*)/, (password: string) => {
    LoginPage.setPassword(password);

    expect(LoginPage.password.getValue()).to.eq(password);
});

When(/I input the address (.*)/, (address) => {
    SearchPage.address = address;
    browser.pause(2000);
    SearchPage.sendKeys('ArrowDown');
    SearchPage.sendKeys('Enter');
});
