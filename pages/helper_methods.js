import { By, until } from "selenium-webdriver";

export default function(driver){
    const pageobjects = {
        companyLogo: By.id("dh_logo"),
    };

    //generic actions
    return {
        navigate: function (text) {
            driver.navigate().to(text);
        },
        companyLogo: function(){
            return driver.findElement(pageobjects.companyLogo).isDisplayed();
        },
        getPageTitle: function(){
            return driver.getTitle();
        },
    };
};