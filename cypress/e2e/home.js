describe('home', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange();
  });

  it('should have the hero content', () => {
    cy.findAllByText(/Chris Postma/i);
    cy.findByText(
      /Software Engineer working in JavaScript -- React, Redux, Node, and Express. Lover of design, photography, computer hardware, and bicycles!/i
    );
    cy.findByText(/GitHub/i);
    cy.findByText(/LinkedIn/i);
    cy.findByText(/Resume/i);
  });

  it('should have recent posts', () => {
    cy.findByText(/Reflecting on learning processes/i);
  });

  it('should have recent projects', () => {
    cy.findByText(/Learnable: Learning management [NextJs]/i);
  });

  it('should have recent projects', () => {
    cy.findByText(/Woord: Reading companion [React, Redux]/i);
  });

  it('should have a footer', () => {
    cy.findByText(/Chris Postma/i);
  });
});
