describe('Página Principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    })
    it('Testando a presença das imagens dos animais na página principal', () => {
        cy.get('.cards').should('be.visible')
        // cy.get('.cards > :nth-child(1) > img').should('be.visible')
        // cy.get('.cards > :nth-child(2) > img').should('be.visible')
        // cy.get('.cards > :nth-child(3) > img').should('be.visible')
        // cy.get('.cards > :nth-child(4) > img').should('be.visible')
        // cy.get('.cards > :nth-child(5) > img').should('be.visible')
        // cy.get('.cards > :nth-child(6) > img').should('be.visible')
        // cy.get('.cards > :nth-child(7) > img').should('be.visible')
        // cy.get('.cards > :nth-child(8) > img').should('be.visible')
        // cy.get('.cards > :nth-child(9) > img').should('be.visible')
    })

})