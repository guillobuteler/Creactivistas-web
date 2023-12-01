describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Loads the site navigation", () => {
    cy.get("nav")
      .should("exist")
      .and("have.descendants", "ul")
      .and("have.descendants", "a");
  });

  it("Navigation to the Actus test works.", () => {
    cy.get('[data-test-id="nav-actus"]').click();
    cy.get('section[data-testid="actus"]').should("exist");
  });

  it("Navigation to the Big 5 test works.", () => {
    cy.get('[data-test-id="nav-big5"]').click();
    cy.get('section[data-testid="big5"]').should("exist");
  });
});
