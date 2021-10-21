import ErrorPage from "../pages/404error_pg";
import initDriver from "../webdriver/driverutility.js";
import HelperMethods from "../pages/helper_methods";
import HomePage from "../pages/home_pg";
import HelloPage from "../pages/hello_pg";
import FormPage from "../pages/form_pg";
import {Given, When, Then, After, Before} from "@cucumber/cucumber";
import {assert} from "chai";

let driver;
let formpage;
let hellopage;
let homepage;
let errorpage;
let helperMethods;

Before(async () => {
    formpage = new FormPage(driver);
    hellopage = new HelloPage(driver);
    helperMethods = new HelperMethods(driver);
    homepage = new HomePage(driver);
    errorpage = new ErrorPage(driver);
    driver = await initDriver();
});

Given("I navigate to the form page", async () => {
    await formpage.navigate();
});

Given("I navigate to the home page", async () => {
    await homepage.navigate();
});

Given("I type {string} into the form input textfield", async (string) => {
    await formpage.waitUntilPageLoaded();
    formpage.searchFor(string);
});

When("I click on the form button from the navbar", async () => {
    await homepage.clickFormButton();
});

When("I click on the home button from the navbar", async () => {
    await homepage.clickHomeButton();
});

When("I click on the error button from the navbar", async () => {
    await homepage.clickErrorButton();
});

When("I click on the navigation UI Testing button", async () => {
    await formpage.clickUiTestingButton();
});

When("I click the Go! button", async () => {
    await formpage.clickGoButton();
});

Then("the form page should load", async () => {
    await formpage.waitUntilPageLoaded();
});

Then("the home page should load", async () => {
    await homepage.waitUntilPageLoaded();
});

Then("the error page should load", async () => {
    await errorpage.waitUntilPageLoaded();
});

Then("the hello page should load", async () => {
    await hellopage.waitUntilPageLoaded();
});

Then("I should see {string}", async (string) => {
    await hellopage.waitUntilPageLoaded();
    assert.equal(await hellopage.assertlinkpresent(), string);
});

Then("the Company logo should be visible", async () => {
    await genericactions.companyLogo();
    assert.equal(await genericactions.companyLogo(), true);
});

Then("I should see a form", async () => {
    await formpage.formVisible();
    assert.equal(await formpage.formVisible(), true);
});

Then("the form button from navbar should be active", async () => {
    await formpage.formButtonStatus();
    assert.equal(await formpage.formButtonStatus(), "Form");
});

Then("it should have textfield with the type text", async () => {
    await formpage.getNameTextFieldAttribute();
    assert.equal(await formpage.getNameTextFieldAttribute(), "text");
});

Then("it should see a submit button with the type submit", async () => {
    await formpage.getNameTextFieldAttribute();
    assert.equal(await formpage.getGoButtonAttribute(), "submit");
});

Then("I should see {string} in the home page header", async (string) => {
    await homepage.getHeaderText();
    assert.equal(await homepage.getHeaderText(), string);
});

Then("I should see {string} paragraph in the home page body", async (string) => {
    await homepage.getParagraphText();
    assert.equal(await homepage.getParagraphText(), string);
});

Then("I should see {string} paragraph in the error page body", async (string) => {
    await errorpage.getParagraphText();
    assert.equal(await errorpage.getParagraphText(), string);
});

Then("the home button from navbar should be active", async () => {
    await homepage.homeButtonStatus();
    assert.equal(await homepage.homeButtonStatus(), "Home");
});

// set of generic actions that can be used on any page
Then("the page title should be {string}", async (string) => {
    await genericactions.getPageTitle();
    assert.equal(await genericactions.getPageTitle(), string);
});

Given("I navigate to {string}", async (string) => {
    await formpage.navigate(string);
});

After(() => driver.quit());