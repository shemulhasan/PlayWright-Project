PlayWright-Project
Prerequisites Before running the tests, ensure you have the following installed:

Node.js (v14 or higher): Download and install from nodejs.org. npm: 

Comes with Node.js, 
used to manage project dependencies. 


To verify that Node.js and npm are installed, run the following commands in your terminal:

node -v 

npm -v

Setup Clone the Repository: Clone this project repository to your local machine:

git clone (https://github.com/shemulhasan/PlayWright-Project) 

cd Install Dependencies: Use npm to install the necessary packages, including Playwright:

npm install 


Install Playwright Browsers: Playwright requires specific browser binaries for testing. Install them using: (Here I am using Chromium)

npx playwright install

Running the Tests

Running Tests 

To run all tests, execute:

npx playwright test

Running a Specific Test 

To run a specific test, 

for example, the SauceDemo test located at tests/saucedemo.spec.js, 

use:
npx playwright test tests/saucedemo.spec.js 

Running in Headed Mode By default, Playwright runs in headless mode (without a visible browser). 

To run in headed mode (with the browser visible):

npx playwright test saucedemo.spec.js --headed

Running a Specific Browser To specify a particular browser (e.g., Chromium, chrome Firefox, or WebKit):


npx playwright test --project=chrome

Summary of Commands: 

Install dependencies: npm install Install 

Playwright browsers: npx playwright install 

Run all tests: npx playwright test 

Run specific test: npx playwright test tests/saucedemo.spec.js 

Run in headed mode: npx playwright test --headed
