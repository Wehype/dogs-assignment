describe('dogs', () => {
  beforeEach(() => cy.visit('/'));

  it('display all dogs on load', () => {
    cy.get('.dog-item').should('have.length', 3000);
  });

  it('filter dogs on search', () => {
    cy.get('#search-input').type('Emerson');
    cy.get('.dog-item').should('have.length', 22);
  });

  it('open details modal on button click', () => {
    cy.get('.mat-button').first().click();
    cy.get('#detail-modal').should('be.visible');
  });

  it('clicking close button closes modal', () => {
    cy.get('.mat-button').first().click();
    cy.get('#detail-modal').should('be.visible');
    cy.get('#close-button').click();
    cy.get('#detail-modal').should('not.exist');
  });
});
