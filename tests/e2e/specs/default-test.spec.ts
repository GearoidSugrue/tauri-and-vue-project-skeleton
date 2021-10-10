describe('Default test', () => {
  it('Should load app', () => {
    cy.visit('/');
    cy.dataCy('app-container').should('exist');
  });
});
