describe("Actus page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/actus");
  });

  it("Loads the description", () => {
    cy.get('section[data-testid="description"]').should("exist");
  });

  it("Loads the button to start the test", () => {
    cy.get('button[data-testid="start-mbti"]').should("exist");
  });

  it("Clicking the button starts the test", () => {
    cy.get('button[data-testid="start-mbti"]').click();
    cy.get('section[data-testid="instructions"]').should("exist");
  });
});
