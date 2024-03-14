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

# How to install and run test
1. Clone repo from github: [https://github.com/ck-point/point_cypress_interview_boilerplate](https://github.com/lraghavan-point/point_cypress_interview_boilerplate)
2. Install yarn: https://classic.yarnpkg.com/en/docs/install
3. Run test with yarn (execute "yarn test" from CLI of choice)

# Address for test:
1. 678 San Miguel Avenue, Santa Clara, CA 
2. 979 Henderson Ave, Sunnyvale, CA 94086
3. 505 Cypress Point Dr, Mountain View, CA 94043
4. 778 Coleman Ave, Menlo Park, CA 94025

# General goals / information for both manual & automated test
1. Documented test case(s) will be used for programming session with engineers
2. KBYG (Know before You Go) workflow has 3-5 pages and last page contains more functionality
3. Can consolidate test cases
4. Breadth vs depth of test coverage but feel free to mention any scenarios that highlights your approach or interesting test cases
5. Consider automation while describing test cases



