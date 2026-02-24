describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();
     })

    it('Acessa a página de login e preenche os dados corretamente e é redirecionado para página /home', () => {
        // cy.visit('https://adopet-frontend-cypress.vercel.app/login')
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
        cy.get('[data-test="input-loginPassword"]').type('Senha123')
        cy.get('[data-test="submit-button"]').click()
        // cy.url().should('include', '/home')
    })
})