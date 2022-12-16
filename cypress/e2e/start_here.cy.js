describe('Features under test', { baseUrl: Cypress.env('KBYG_URL') }, () => {
  before(() => {
    cy.visit('/');
    cy.kbygLogin();
  });

  it('passes', () => {
    cy.log('begining to implement test');
  });
})