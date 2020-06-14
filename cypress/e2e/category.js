describe('category', () => {
  it('should exist on index "recent posts" and work', () => {
    cy.visit('/').waitForRouteChange();
    cy.findByText(/Meta-learning/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/categories/meta-learning');
  });

  it('should have correct posts on individual overview pages', () => {
    cy.visit('/categories/meta-learning').waitForRouteChange();
    cy.findByText(/Reflecting on learning processes/i);
  });
});
