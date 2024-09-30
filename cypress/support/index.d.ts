// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare global {
declare namespace Cypress {

 
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
    */

    findByText(text: string | RegExp, options?: Partial<Loggable & Timeoutable & Withinable>);
    xpath(selector: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<HTMLElement>>;
    tab(options?: Partial<Loggable & Timeoutable>): Chainable<Subject>;

  }
}

}
