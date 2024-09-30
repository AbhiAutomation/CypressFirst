import { SamplePage } from "../support/e2e";

const samplePage = new SamplePage();

describe('sample test cases', () => {

   beforeEach(() => {
      cy.visit(Cypress.env('FRONTEND_URL'));
         cy.get

   })

   it('test1', () => {
      //  cy.visit("https://ultimateqa.com/automation/");
      cy.reload(true);
      cy.url().should('include', '/automation');
      samplePage.clickLoginLink();
      //Verify 
      //  cy.url().should('contain','//forms.clickup.com/');

   })

})