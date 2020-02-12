Feature: Happy path and Error validation
As a user
I want to login on the page with valid credentials

  Scenario: Login with valid credentials
    Given I navigate to /login
     Then I am on the login page
     When I input the email address qaskillschallenge@geophy.com
     When I input the password qaskillschallenge@geophy.com
      And I click on the login button
     Then I am on the search page
      And I click on the logout button
     Then I am on the login page
  
  Scenario: Verify error message when using incorrect credentials
    Given I navigate to /login
     Then I am on the login page
     When I input the email address a@a.com
     When I input the password a@a.com
      And I click on the login button
     Then I can see an informative credetianls error message 
     Then I am on the login page
  
