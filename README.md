# Simple Framework
This is a simple Cypress testing framework to test <strong>Paylocity Benefits Dashboard.</strong>
<br/> Framwork <strong>contains 23 tests: 12 tests should pass and 11 tests should fail</strong> because of the bugs.
<br/> After each test run the framework will create <strong>test-reports and screenshots folders where you can find html reports and screenshoots of failed tests.</strong>

## Clone repo
clone repository using
```shell
git clone https://github.com/dmitriisem/PaylocityBugChallenge.git
```

## How to run
1. Install node.js https://nodejs.org/en/ <br/>
2. Clone repo
3. Navigate to downloaded repo folder using CLI
4. Install framework dependencies using command below
```shell
npm install
```
5. Run all tests in headless mode using command:
```shell
npm run cy:regression
```
6. Run all tests in Chrome headed mode using command:
```shell
npm run cy:regression:chrome
```

## Here you can see defects that were found as a result of testing Paylocity Benefits Dashboard application:
[Defects](defects/bugs.md)