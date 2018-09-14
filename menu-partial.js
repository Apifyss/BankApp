var SelectUserName = function(selector) {
    this.webElement = element(selector);
};
SelectUserName.prototype.getOptions = function() {
    
    return this.webElement.all(by.tagName('option'));
};
SelectUserName.prototype.getSelectedOptions = function() {

    return this.webElement.all(by.css('option[selected="selected"]'));
};
SelectUserName.prototype.selectByValue = function(value) {

    return this.webElement.all(by.css('option[value="' + value + '"]')).click();
};
SelectUserName.prototype.selectByPartialText = function(text) {

    return this.webElement.all(by.cssContainingText('option', text)).click();   
};
SelectUserName.prototype.selectByText = function(text) {

    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();   
};

module.exports =  SelectUserName;