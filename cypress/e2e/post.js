describe('post', () => {
  it('should be clickable on home', () => {
    cy.visit('/').waitForRouteChange();
    cy.findByText(/Reflecting on learning processes/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/reflecting-on-learning-processes');
  });

  it('should have its content', () => {
    cy.visit('/reflecting-on-learning-processes').waitForRouteChange();
    cy.get('header').within(() => {
      cy.findByText(/Reflecting on learning processes/i);
      cy.findByText(/27.12.2019/i);
    });
    cy.findByText(
      /I'm preparing myself to attend the Turing School of Software and Design in Denver, CO./i
    );
  });

  it('should have working recent posts', () => {
    cy.visit('/reflecting-on-learning-processes').waitForRouteChange();
    cy.get('main').within(() => {
      cy.findByText(/Understanding context (this) in JavaScript/i)
        .click({ force: true })
        .waitForRouteChange();
    });
    cy.get('header').within(() => {
      cy.findByText(/Understanding context (this) in JavaScript/i);
    });
  });

  it('should link to its category', () => {
    cy.visit('/reflecting-on-learning-processes').waitForRouteChange();
    cy.get('header').within(() => {
      cy.findByText(/JavaScript/i)
        .click({ force: true })
        .waitForRouteChange();
    });
    cy.findAllByText(/Category/i);
  });
});
