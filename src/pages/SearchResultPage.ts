class SearchResultPage {
    private readonly TABLE_RESULT = '//*[@id="page-content"]//table/tbody';

    get transactionPrice() {
        const price = $('h1[data-transaction-price]').getText();

        return parseFloat(price.substring(2).replace(/,/g, ''));
    }

    get capRate() {
        $('h1[data-cap-rate] ').waitForExist();

        const capRate = $('h1[data-cap-rate] ').getText();

        return parseFloat(capRate.substring(0, capRate.length - 3));
    }

    get numberOfUnits() {
        const nbrOfUnit = $(`${this.TABLE_RESULT}//td[text()="Number of units"]/following-sibling::td[1]`).getText();

        return parseInt(nbrOfUnit, 10);
    }

    get yearOfConstruction() {
        return $(`${this.TABLE_RESULT}//td[text()="Year of construction"]/following-sibling::td[1]`).getText();
    }

    get netOperatingIncome() {
        const noi = $(`${this.TABLE_RESULT}//td[text()="NOI"]/following-sibling::td[1]`).getText();

        return parseFloat(noi.substring(2).replace(/,/g, ''));
    }

    get walkReachEducation() {
        const walkReach = $('div[data-reach="Walk Reach"] >*> h5[data-count]').getText();

        return parseInt(walkReach, 10);
    }

    get driveReachEducation() {
        const driveReach = $('div[data-reach="Drive Reach"] >*> h5[data-count]').getText();

        return parseInt(driveReach, 10);
    }

    get customerWelcomeName() {
        const welcomeName = $('nav > ul:nth-child(3) > li:nth-child(1) > span').getText();

        return (welcomeName);
    }

}

export default new SearchResultPage();