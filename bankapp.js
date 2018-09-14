describe('Testing bank app ', function () {
  var SelectUserName = require('./menu-partial');
  var Transaction = require('./transaction');
  var Deposite = require('./deposite');
  var Withdraw = require('./withdrawal');

  it('Should able to login as customer ', function () {
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    element(by.css('[ng-click="customer()"]')).click();
    browser.sleep(1000);
    //click dropdown to seledc user name 
    var x = element(by.id("userSelect"));
    x.click();
    browser.sleep(1000);
    //get dropdown by id and pass it to Page object "SelectUserName"
    var mySelect = new SelectUserName(by.id('userSelect'));
    // select an option by value
    mySelect.selectByValue('1');
    browser.sleep(1000);
    var userName = 'Ron Weasly';
    //select by visible text
    mySelect.selectByText(userName);
    browser.sleep(1000);
    //click to login as selected user "Ron Weasly"
    browser.findElement(By.xpath("//button[@type='submit'and text()='Login']")).click();
    browser.sleep(1000);
    var x = element(By.css('.fontBig'));
    //verify text which contains same User Name 
    expect(x.getText()).toContain(userName);
    browser.sleep(1000);
    //Go to transaction page by clicking transaction button 
    Transaction.clicktransactions();
    //number of transactions done by selected user
    Transaction.getTransactionDetails().then(function (totaltransact) {
      var tra = totaltransact;
      console.log("total transact ", +tra);
      //expect(tra).toBe(0);
      //click to go back 
      element(by.css('[ng-click="back()"]')).click();
      browser.sleep(1000);
      //check current balance  
      element(By.className('center')).all(By.tagName('strong')).get(1).getText().then(function (balancenow) {
        console.log("this is current balance" + balancenow);
        browser.sleep(1000);
        //click to deposite amount 
        Deposite.clickdeposite();
        //deposite some amount 
        var dAmount = "1000";
        Deposite.depositeamount(dAmount);
        //check balance after deposite amount   
        element(By.className('center')).all(By.tagName('strong')).get(1).getText().then(function (balancenow1) {
          expect(Number(balancenow1)).toBe(Number(balancenow) + Number(dAmount));
          //element(by.model('amount')).sendKeys("1000")
          // //click to withdraw amount
          Withdraw.clickwithdraw();
          var wAmount = "1000";
          //withdraw some amount 
          Withdraw.withdrawamount(wAmount);
          //check balance after withdrawal of amount
          element(By.className('center')).all(By.tagName('strong')).get(1).getText().then(function (balancenow2) {
            expect(Number(balancenow2)).toBe(Number(balancenow1) - Number(wAmount));
            //Go to transaction page by clicking transaction button 
            Transaction.clicktransactions();
            //number of transactions done after deposite and withdrawal 
            Transaction.getTransactionDetails().then(function (totaltransactnow) {
              var tra1 = totaltransactnow;
              //it shiuld increase with two trasacrtions
              expect(tra1).toBe(tra + 2);
            });
          });
        });
      });

    });
  });
});
