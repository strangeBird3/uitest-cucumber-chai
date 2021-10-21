import {By, until, Key} from 'selenium-webdriver';
import {titleMatches} from 'selenium-webdriver/lib/until';
import {assert} from 'chai';

export default function(driver) {
	const pageobjects = {
		homebutton: By.id("home"),
		h1: By.css("h1"),
		activenavbutton: By.xpath("//li[@class = 'active']"),
		formbutton: By.id("form"),
		pagetitle: By.xpath("/html/head/title"),
		paragraph: By.css("p"),
		errorbutton: By.id("error"),
	};

	return {
		url: "http://uitest.duodecadits.com",
		navigate: function() {
			driver.navigate().to(this.url);
			return this.waitUntilPageLoaded();
		},
		homeButtonStatus: function(){
			return driver.findElement(pageobjects.activenavbutton).getText();
		},
		clickFormButton: function() {
			return driver.findElement(pageobjects.formbutton).click();
		},
		clickHomeButton: function() {
			return driver.findElement(pageobjects.homebutton).click();
		},
		clickErrorButton: function() {
			return driver.findElement(pageobjects.errorbutton).click();
		},
		getHeaderText: function(){
			return driver.findElement(pageobjects.h1).getText();
		},
		getParagraphText: function(){
			return driver.findElement(pageobjects.paragraph).getText();
		},
		getInnerText: function(text) {
			driver
				.findElement(pageobjects.pagetitle)
				.getText()
				.then((textValue) => {
					assert.equal(text, textValue);
				});
		},
		waitUntilPageLoaded: function() {
			return driver.wait(until.titleContains("UI Testing Site"));
		},
	};
}