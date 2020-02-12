# GeoPhy Skill Showcase

## The problem

Create, implement and design test cases to demonstrate:
  
  - Understanding and application of BDD
  - Usage of xpath and CSS selectors
  - Value assertions 
  - Screenshots making
  - Report generation

## The tools

- Features files use Cucumber and the test cases are written in Gherkin format. 
- Typescrit 
- Allure reports

# Why Typescript?

- TypeScript simplifies JavaScript code,
- easier to read and debug.
- TypeScript is open source.
- Help avoid bugs when writing in JavaScript

## Installing

```bash
$> git clone https://github.com/cargutba/GeoPhy-s-Skill-Showcase.git
$> cd GeoPhy-s-Skill-Showcase
$> npm install
```
## Running the tests

Once the installation is done, you can run the tests by typing 

```
$> npm run test 
```

## Reports
## Prerequisites 

```
$> npm install @wdio/allure-reporter --save-dev
$> npm install -g allure-commandline --save-dev
```

## Run the report 
Open the terminal enter: 

```
$> node_modules/.bin//allure generate allure-results/ --clean && node_modules/.bin/allure open
```