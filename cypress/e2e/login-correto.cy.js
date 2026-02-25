describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();
     })

    it('Acessa a página de login e preenche os dados corretamente e é redirecionado para página /home', () => {
        cy.login('ana@email.com', 'Senha123')
    })
})