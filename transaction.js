
var transaction_page = function () {

    //function to click transation button 
    this.clicktransactions = function () {
        //click on transaction button 
        element(by.css('[ng-click="transactions()"]')).click();
        browser.sleep(1000);
    }
    //function to get number of transactions value 
    this.getTransactionDetails = function () {
        //count number of transaction by countion available rows in table 
        let list = element.all(by.xpath("//table[@class='table table-bordered table-striped']/tbody/tr"));
        //return number of transactions value 
        return list.count();
    };
};

module.exports = new transaction_page();
