describe("Actus page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/actus");
  });
  it("Loads the description", () => {
    cy.get('section[data-testid="description"]').should("exist");
  });
  it("Loads the instructions", () => {
    cy.get('section[data-testid="instructions"]')
      .should("exist")
      .and("have.descendants", "li");
  });
});
