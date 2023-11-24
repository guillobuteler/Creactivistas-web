describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Loads the site navigation", () => {
    cy.get("nav").should("exist");
  });

  it("Loads the view-loader section", () => {
    cy.get('section[data-testid="view-loader"]').should("exist");
  });

  it("Loads the welcome message", () => {
    cy.get("h1").should("have.text", "Tests de personalidad");
  });
});
