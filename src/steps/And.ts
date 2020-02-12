import { Then as And } from 'cucumber';

import { expect } from 'chai';

import LoginPage from '../pages/LogInPage';
import SearchPage from '../pages/SearchPage';
import SearchResultPage from '../pages/SearchResultPage';

And('I click on the login button', () => {
     LoginPage.submitLogin();
});

And('I click on run valuation button', () => {
    SearchPage.runValuation();
});

And(/a transaction price of ([\d]{1,})/, (price) => {
    expect(SearchResultPage.transactionPrice).to.eq(parseInt(price, 10));
});

And(/the year of construction equal to ([\d]{4})/, (year) => {
    expect(SearchResultPage.yearOfConstruction).to.eq(year);
});

And(/the net operating income equal to (.*)/, (noi) => {
    expect(SearchResultPage.netOperatingIncome).to.eq(parseInt(noi, 10));
});

And('I scroll down to the neighborhood menu', () => {
    SearchPage.scrollToElement();
});

And('I click on the logout button', () => {
    LoginPage.submitLogout();
});