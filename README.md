# Frontend-Cypress
Frontend V2 E2E Cypress Test Cases

## Prerequisites
Install Node JS from https://nodejs.org/en

Set system variable NODE_HOME(C:\Program Files\nodejs) and set the same in the PATH variable

## Cloning Cypress Repo 
Clone the cypress repo to a folder using the below command
```
git clone git@github.com:socotra/frontend-cypress.git
```

User needs to set up ssh keys before pulling the code from the github repo.

Refer the document [here](https://socotra.atlassian.net/wiki/spaces/QUAL/pages/1266581654/Setting+up+SSH+Keys+to+clone+the+repo)

## Installation
For rest of the installations go to projects root folder in command prompt and type the commands

Below command installs Cypress and all the other dependencies from package.json

```node
cd frontend-cypress
npm i
```

## Opening Cypress Test Runner Locally
```node
npm test
```



## Running Cypress Tests via Test Runner
Click on the test case spec file to run the test cases from Cypress Test Runner

### Tests Locations

| Type | Location                                   |
| ---- | ------------------------------------------ |
| tests | [cypress/integration/tests](./cypress/tests) |



### Running all tests via terminal in headless mode
```node
npx cypress run
```

### Additional NPM Scripts

| Script                  | Description                                                         |
| ----------------------- | ------------------------------------------------------------------- |
| cy:open                 | Open interactive cypress run your tests                             |
| cy:run:headless         | Run headless mode with default electron browser                     |
| cy:chrome:headless      | Run headless with chrome browser                               |

### Cypress V10 Migration
Enter command ```npm i``` to install dependencies

https://docs.cypress.io/guides/references/migration-guide#Migrating-to-Cypress-version-10-0

### Major Changes in Cypress V10
All spec files will have extension .cy.ts from previuosly spec.ts

Configuration changes will be stored in cypress.config.ts. cypress.json is deprecated

npx cypress open:  will open Cypress Test runner. Select E2E option and then select required browser to run your tests
![image](https://user-images.githubusercontent.com/74168071/197133869-bd7370f8-d445-4684-a650-7ec1dea09bf7.png)

![image](https://user-images.githubusercontent.com/74168071/197134098-435a594c-4f43-4ef5-b4e0-710b34e840f2.png)

![image](https://user-images.githubusercontent.com/74168071/197201352-7422b436-ba8a-4767-9ee6-7e1411c277ba.png)

