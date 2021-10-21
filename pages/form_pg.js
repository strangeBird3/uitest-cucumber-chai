import {By, until, Key} from 'selenium-webdriver';

export default function(driver){
	const pageobjects = {
		activenavbutton: By.xpath("//li[@class = 'active']"),
		form: By.id('hello-form'),
		formbutton: By.id('form'),
		gobutton: By.id('hello-submit'),
		nametextfield: By.id('hello-input'),
		uitestingbutton: By.id('site'),
	};

	return {
		url: "http://uitest.duodecadits.com/form.html",
		navigate: function() {
			driver.navigate().to(this.url);
			return this.waitUntilVisible();
		},
		getNameTextFieldAttribute: function(){
			return driver.findElement(pageobjects.nametextfield).getAttribute("type");
		},
		getGoButtonAttribute: function () {
			return driver.findElement(pageobjects.gobutton).getAttribute("type");
		},
		searchFor: function(text) {
			return driver.findElement(pageobjects.nametextfield).sendKeys(text);
		},
		clickUiTestingButton: function(){
			return driver.findElement(pageobjects.uitestingbutton).click();
		},
		clickGoButton: function(){
			return driver.findElement(pageobjects.gobutton).click();
		},
		formVisible: function() {
			return driver.findElement(pageobjects.form).isDisplayed();
		},
		formButtonStatus: function(){
			return driver.findElement(pageobjects.activenavbutton).getText();
		},
		waitUntilPageLoaded: function(){
			return driver.wait(until.titleContains("UI Testing Site"));
		},
		waitUntilVisible: function(){
			return driver.wait(until.elementLocated(pageobjects.nametextfield));
		},

	};
};