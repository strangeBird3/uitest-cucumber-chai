import {By, until, Key} from 'selenium-webdriver';

export default function (driver){
	const pageobjects = {
		paragraph: By.css("body > p > i"),
	};

	return {
		waitUntilPageLoaded: function() {
			return driver.wait(until.titleContains("404 Error: File not found :-)"));
		},
		getParagraphText: function(){
			return driver.findElement(pageobjects.paragraph).getText();
		},
	};
};