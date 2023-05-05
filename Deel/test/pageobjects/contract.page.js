const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContractPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnCreateAContract () {
        return $('//*[contains(text(),"Create A Contract")]');
    }

    get btnFixedRate () {
        return $('//*[contains(text(),"Fixed Rate")]');
    }

    get btnPayAsYouGo () {
        return $('//*[contains(text(),"Pay As You Go")]');
    }

    get inputContractorsName() {
        return $('//input[@placeholder="Untitled contract"]');
    }

    get inputContractorsTaxCountryBox() {
        return $('//*[contains(text(),"tax residence")]/..');
    }

    get inputContractorsTaxResidence() {
        return $('//*[@id=":r1a:"]');
    }

    get inputContractorsTaxCountry(){
        return $('//*[contains(text(),"United States")]');
    }

    get inputContractorsTaxStateBox() {
        return $('//*[contains(text(),"Choose a state")]/..');
    }

    get inputContractorsTaxState(){
        return $('//*[contains(text(),"Colorado")]');
    }
    
    get inputSeniorityLevel(){
        return $('//*[contains(text(),"Seniority level")]/..');
    }

    get inputNotApplicableLevel(){
        return $('//*[contains(text(),"Seniority level")]/../div/input');
    }

    get inputScopeOfWork(){
        return $('//*[contains(text(),"Scope of work")]/..');
    }

    get inputScopeOfWorkArea(){
        return $('//*[@name="scope"]');
    }

    get divCalendarBox(){
        return $('//*[contains(text(),"start date")]/..');
    }

    get inputCalendar(){
        return $('//input[@name="effectiveDate"]');
    }

    get buttonNext(){
        return $('//button[@data-qa="next"]');
    }

    get divCurrencyBox(){
        return $('//*[contains(text(),"Currency")]/../..');
    }

    get divCurrencyField(){
        return $('//*[contains(text(),"GBP - British Pound")]');
        //GBP - British Pound
        //*[contains(text(),"Currency")]/../div/div[1]/div[1]
    }

    get inputPaymentRate(){
        return $('//*[contains(text(),"Payment rate")]/../div/input');
    }

    get divPaymentFrquencyBox(){
        return $('//*[contains(text(),"Payment frequency")]/..');
    }
    
    get inputPaymentFrequencyField(){
        return $('//*[contains(text(),"Payment frequency")]/../div/input');
    }

    get labelEndDateField(){
        return $('//label[contains(text(),"Weekly")]/..');
    }

    get inputEndDateField(){
        return $('//*[@name="select-end-date-picker"]');
    }
    
    get buttonAddAnSpecialClause(){
        return $('//*[contains(text(),"Special Clause")]/../../../button');
    }
    
    get textAreaSpceialClause(){
        return $('//*[contains(text(),"Remove")]/../../../../div/div/textarea');
    }

    get buttonCreateContract(){
        return $('//*[@data-qa="create-contract"]');
    }

    get labelNoticePeriod(){
        return $('//label[contains(text(),"Notice period")]/..');
    }

    get buttonNextMonth(){
        return $('//*[@aria-label="Next month"]');
    }

    get buttonDay11(){
        return $('//button[contains(text(),"11")]');
    }

    get buttonProcedingSiblingData(){
        return $('//button[@aria-current="date"]/../preceding-sibling::span[1]/button');
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async CreateFixedRateContract (contractorsName,countryName, stateName,scopetext) {
        //general Info tab
        await this.btnCreateAContract.click();
        await this.btnFixedRate.click();
        await this.inputContractorsName.setValue(contractorsName);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.inputContractorsTaxCountryBox.click();
        await this.inputContractorsTaxCountry.click();
        await this.inputContractorsTaxStateBox.click();
        await this.inputContractorsTaxState.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.inputSeniorityLevel.click();
        await this.inputNotApplicableLevel.setValue('Not applicable');
        await this.inputScopeOfWork.click();
        await this.inputScopeOfWorkArea.setValue(scopetext);
        await this.inputCalendar.click();
        await this.buttonProcedingSiblingData.click();
        await this.buttonNext.click();
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Payment Details
        await this.divCurrencyBox.click();
        await new Promise(resolve => setTimeout(resolve, 6000));
        await this.divCurrencyField.click();
        await this.inputPaymentRate.setValue('4000');
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.divPaymentFrquencyBox.click();
        await this.inputPaymentFrequencyField.setValue("Weekly");
        await this.buttonNext.click();
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Define Dates Screen
        await this.inputEndDateField.click();
        await this.buttonNextMonth.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.buttonDay11.click();
        await new Promise(resolve => setTimeout(resolve, 10000));
        await this.buttonNext.click();

        //benefits and extras
        await this.buttonAddAnSpecialClause.click();
        await this.textAreaSpceialClause.setValue('Test additional special clause');
        await this.buttonNext.click();
        await new Promise(resolve => setTimeout(resolve, 10000));
        
        //Compliance
        await this.buttonCreateContract.click();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    async CreatePayAsYouGoContract (username, password) {
        await this.btnCreateAContract.click();
        await this.btnPayAsYouGo.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new ContractPage();
