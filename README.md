# point_cypress_interview_boilerplate
This is a boilerplate project to take care Cypress setup for interview or prototyping a new project.

The scope of test may not be limited to the workflow as mentioned.
The interviewee may add additional test case outside of workflow as needed as well as custom cypress command if needed.
Environment configuration and test cases organization should be considered as well.

In addtion to cypress, this project also have dependency with Cypress Testing Library.
This is the preferred method to interact with / verify DOM elements if possible.
Ref: https://testing-library.com/docs/cypress-testing-library/intro

# System under test: Know before you go (KBYG)
The system under test is https://partner-qa.point.dev/
The general workflow is listed as following:
1. User can login to the page with email and execute following tasks:
    - sign out  with link on page
    - input address and check how much equity is there for a Point investment, and what the max offer might be 
2. For property with result and is eligible:
    - System should display maximum offer
    - User may further refine inputs such as home value, lien amount and credit score  
3. Once pre-approved, user may view pricing and etimate cost
4. Additional UI control is available for user to adjust the details of contract; Or user may proceed to continue with appliccation or book an appointment with an account manager.






