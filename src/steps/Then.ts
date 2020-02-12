import { Then } from 'cucumber';

import { expect } from 'chai';

import LoginPage from '../pages/LogInPage';
import SearchPage from '../pages/SearchPage';
import SearchResultPage from '../pages/SearchResultPage';

Then(/I am on the (.*) page/, (pageName) => {
    const url = browser.getUrl();

    expect(url).to.eq(`${browser.config.baseUrl}/${pageName}`);
});

Then(/I specify a net operating income of \$(.*)/, (amount) => {
    SearchPage.netOperatingIncome = amount;
});

Then(/I specify an amount of units needed of ([\d]{1,})/, (units) => {
    SearchPage.numberOfUnits = units;
});

Then(/I specify the year of construction ([\d]{4})/, (year) => {
    SearchPage.yearOfConstruction = year;
});

Then(/I see a cap rate of ([\d]{2,})/, (capRate) => {
    browser.pause(5000);
    expect(SearchResultPage.capRate).to.eq(parseInt(capRate, 10));
});

Then(/I should see the number of units equal to ([\d]{1,})/, (units) => {
    expect(SearchResultPage.numberOfUnits).to.eq(parseInt(units, 10));
});

Then(/I should see the number of walk reach education centers ([\d]{1,})/, (walkReach) => {
    expect(SearchResultPage.walkReachEducation).to.eq(parseInt(walkReach, 10));
});

Then(/I should see the number of drive reach education centers ([\d]{1,})/, (driveReach) => {
    expect(SearchResultPage.driveReachEducation).to.eq(parseInt(driveReach, 10));
});

Then(/I should see the Customer name on the top right of the page (.*)/, (welcomeName) => {
    expect(SearchResultPage.customerWelcomeName).to.eq(welcomeName);
});

Then('I can see an informative credetianls error message', () => {
    expect(LoginPage.displayLogoutError).to.eq('There was an error with your e-mail or password, please try entering your login credentials again.');
});