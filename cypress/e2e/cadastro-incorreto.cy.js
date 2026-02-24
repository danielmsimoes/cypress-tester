describe('Página de Cadastro - incorreto', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    })
    it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Crie uma senha').should('be.visible')
        cy.contains('Repita a senha criada acima').should('be.visible')

    })
})