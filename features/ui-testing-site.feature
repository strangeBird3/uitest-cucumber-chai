Feature: UI Testing Site - Docler

    #Satisfies REQ-UI-01, REQ-UI-02, REQ-UI-03, REQ-UI-04, REQ-UI-09, REQ-UI-10 
    Scenario: Validating the home page
        Given I navigate to the form page
        Then the form page should load
        When I click on the home button from the navbar
        Then the home page should load
        And the page title should be "UI Testing Site"
        Then the home button from navbar should be active
        And the Company logo should be visible
        Then I should see "Welcome to the Docler Holding QA Department" in the home page header
        And I should see "This site is dedicated to perform some exercises and demonstrate automated web testing." paragraph in the home page body

    #Satisfies REQ-UI-01, REQ-UI-02, REQ-UI-05, REQ-UI-06
    Scenario: Validating the form page
        Given I navigate to the home page
        Then the home page should load
        When I click on the form button from the navbar
        Then the form page should load
        And the page title should be "UI Testing Site"
        Then the form button from navbar should be active
        And the Company logo should be visible

    #Satisfies REQ-UI-07
    Scenario: Validating "Error" button from navbar. When I click on "Error" button, I should get a 404 HTTP response code
        Given I navigate to the home page
        Then the home page should load
        When I click on the error button from the navbar
        Then the error page should load
        Then the page title should be "404 Error: File not found :-)"
        Then I should see "I thank you. I love you too." paragraph in the error page body

    #Satisfies REQ-UI-01, REQ-UI-08
    Scenario: Validating "UI Testing" button. When I click on the "UI Testing" button, it should take user to Home page
        Given I navigate to the form page
        Then the form page should load
        When I click on the navigation UI Testing button
        Then the home page should load
        And the page title should be "UI Testing Site"
        Then I should see "Welcome to the Docler Holding QA Department" in the home page header

    #Satisfies REQ-UI-11
    Scenario: Validating the form exists. On the form page, a form should be visible with one input box and one submit button
        Given I navigate to the form page
        Then the form page should load
        Then I should see a form
        And it should have textfield with the type text
        And it should see a submit button with the type submit

    #Satisfies REQ-UI-01, REQ-UI-02, REQ-UI-12
    Scenario Outline: Hello Form <value> & <result>
        Given I navigate to the form page
        Then the form page should load
        And the page title should be "UI Testing Site"
        Given I type "<value>" into the form input textfield
        When I click the Go! button
        Then the hello page should load
        Then I should see "<result>"
        Then the Company logo should be visible
        Examples:
            | value     | result            |
            | John      | Hello John!       |
            | Sophia    | Hello Sophia!     |
            | Charlie   | Hello Charlie!    |
            | Emily     | Hello Emily!      |