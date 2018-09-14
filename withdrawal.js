var withdrawal_page = function () {

  //function to click withdraw button 
  this.clickwithdraw = function () {
    // //click to withdraw button
    element(by.css('[ng-click="withdrawl()"]')).click();
    browser.sleep(1000);
  };


  //function to withdraw amount by passing amount 
  this.withdrawamount = function (amnt) {
    //write amount to textbox
    element(by.model('amount')).sendKeys(amnt);
    //click on withdraw button
    browser.findElement(By.xpath("//button[@type='submit'and text()='Withdraw']")).click();
    browser.sleep(1000);
  };
};

module.exports = new withdrawal_page();