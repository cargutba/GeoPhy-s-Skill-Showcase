class SearchPage {
    private readonly ADDRESS_INPUT: string = 'input[id="address_input"]';
    private readonly NET_OPERATING_INCOME_INPUT: string = 'input[id="noi"]';
    private readonly NUMBER_OF_UNITS_INPUT: string = 'input[name="number_of_units"]';
    private readonly YEAR_OF_CONSTRUCTION_INPUT: string = 'input[name="year_built"]';
    private readonly EDUCATION_BUTTON: string = 'div[id="neighborhood"]';

    get address() {
        return $(this.ADDRESS_INPUT);
    }

    set address(val: any) {
        $(this.ADDRESS_INPUT).setValue(val);
    }

    get netOperatingIncome() {
        return $(this.NET_OPERATING_INCOME_INPUT);
    }

    set netOperatingIncome(val: any) {
        $(this.NET_OPERATING_INCOME_INPUT).setValue(val);
    }

    get numberOfUnits() {
        return $(this.NUMBER_OF_UNITS_INPUT);
    }

    set numberOfUnits(val: any) {
        $(this.NUMBER_OF_UNITS_INPUT).setValue(val);
    }

    get yearOfConstruction() {
        return $(this.YEAR_OF_CONSTRUCTION_INPUT);
    }

    set yearOfConstruction(val: any) {
        $(this.YEAR_OF_CONSTRUCTION_INPUT).setValue(val);
    }

    runValuation() {
        $('#introjsRunValuationButton').click();
    }
    sendKeys(keycommand: any) {
        $(this.ADDRESS_INPUT).setValue(keycommand);
    }

    scrollToElement() {
        $(this.EDUCATION_BUTTON).scrollIntoView();
        browser.pause(5000);
    }

}

export default new SearchPage();
