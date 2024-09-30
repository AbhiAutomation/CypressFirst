declare global {
  namespace Cypress {
    interface Chainable {
      clearDownloadsFolder: typeof clearDownloadsFolder;
    }
  }
}

export function clearDownloadsFolder() {
	cy.log('Clearing downloads folder');
	cy.exec(`rm ${Cypress.env('downloadsFolder')}/*`, { failOnNonZeroExit: false });
}