import { By, until } from "selenium-webdriver";

export default function(driver){
    const pageobjects = {
        headertext: By.id("hello-text"),
    };

    return {
        assertlinkpresent: function(){
            return driver.findElement(pageobjects.headertext).getText();
        },
        waitUntilPageLoaded: function(){
            return driver.wait(until.titleContains("UI Testing Site"));
        },
    };
}