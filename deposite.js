
var deposite_page = function () {
    //frunction to click deposite button 
    this.clickdeposite = function () {
        //click to deposite amount 
        element(by.css('[ng-click="deposit()"]')).click();
        browser.sleep(1000);
    };

    //function to deposite amount
    this.depositeamount = function (amnt) {
        //write deposte amount in textbox 
        element(by.model('amount')).sendKeys(amnt);
        //click deposite button
        browser.findElement(By.xpath("//button[@type='submit'and text()='Deposit']")).click();
        browser.sleep(1000);
        //check successful transaction message 
        expect(element(by.className('error')).getText()).toContain("Deposit Successful");
    };
};

module.exports = new deposite_page();