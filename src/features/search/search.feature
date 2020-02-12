Feature: Perform a search on Evra page 
As a user
I want to search for a property
I want to verify the result of the search is consistent 

  Background: Login for accessing the search page
    Given I navigate to /login
     Then I am on the login page
     When I input the email address qaskillschallenge@geophy.com
     When I input the password qaskillschallenge@geophy.com
      And I click on the login button
     Then I am on the search page
  
  Scenario Outline: fill informations on the search page
     When I input the address <Address>
     Then I specify a net operating income of $<NoiValue>
     Then I specify an amount of units needed of <UnitsNeeded>
     Then I specify the year of construction <YearConstruction>
      And I click on run valuation button
  
  #Verify Customer values  
     Then I see a cap rate of <CapRate>
     Then I should see the Customer name on the top right of the page <WelcomeName>
      And a transaction price of <TransactionPrice>
     Then I should see the number of units equal to <UnitsNeeded>
      And the year of construction equal to <YearConstruction>
      And the net operating income equal to <NoiValue>
  
  #Verify Education
    Given I scroll down to the neighborhood menu
     Then I should see the number of walk reach education centers <WalkReach>
     Then I should see the number of drive reach education centers <DriveReach>
  
    Examples: 
      | Address                                 |  | NoiValue   |  | UnitsNeeded |  | YearConstruction |  | CapRate |  | TransactionPrice |  | WalkReach |  | DriveReach |  | WelcomeName              | 
      | 2 INDUSTRIAL RD, MILFORD, MA 01757, USA |  | 1234567890 |  | 12          |  | 1960             |  | 3414.61 |  | 36155500         |  | 0         |  | 23         |  | Welcome back, QA Geophy. | 
  
