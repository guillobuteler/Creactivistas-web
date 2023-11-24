describe("Actus page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/actus/test");
  });

  it("Loads the instructions", () => {
    cy.get('section[data-testid="instructions"]')
      .should("exist")
      .and("have.descendants", "li");
  });

  it("Loads the button to start the test", () => {
    cy.get('button[data-testid="end-mbti"]').should("exist");
  });
});
