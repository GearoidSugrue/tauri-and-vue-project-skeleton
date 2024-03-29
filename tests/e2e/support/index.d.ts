// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
// / <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<Element>;
    /**
     * Custom command to perform a UI based login
     */
    doLogin(
      username: string,
      password: string
    ): Chainable<Cypress.Response<void>>;
    /**
     * Custom command to perform a UI based logout
     */
    doLogout(): Chainable<Cypress.Response<void>>;
  }
}
