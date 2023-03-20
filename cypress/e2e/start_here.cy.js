describe('Features under test', { baseUrl: Cypress.env('KBYG_URL') }, () => {
  it('passes', () => {
    cy.visit('/');
    cy.kbygLogin();
    cy.log('begining to implement test');
  });
})