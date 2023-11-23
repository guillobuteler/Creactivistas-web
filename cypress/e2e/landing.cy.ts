describe('Landing page', () => {
    it('Loads the navigation menu', () => {
        cy.visit('http://localhost:3000');
        cy.get('nav')
            .should('exist')
            .and('have.descendants', 'div');
    })
    it('Loads the welcome section', () => {
        cy.get('section[data-testid="welcome"]').should('exist');
    });
})