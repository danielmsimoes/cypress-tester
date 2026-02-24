describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login')
    })
    
    it('Acessa a página de login e preenche o campo de email com dados inválidos e verifica o erro',() => {
       cy.get('[data-test="input-loginEmail"]').type('daniel.com')
       cy.get('[data-test="input-loginPassword"]').type('Senha@123')
       cy.get('[data-test="submit-button"]').click()
       cy.contains('Por favor, verifique o email digitado').should('be.visible')
    })
    it('Acessa a página de login e preenche o campo de senha incorretamente e verifica o erro', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
        cy.get('[data-test="input-loginPassword"]').type('abcd')
        cy.get('[data-test="submit-button"]').click()
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })
    it('Acessa a página de login e preenche o campo de email e senha incorretamente e verifica ambos erros', () =>{
        cy.get('[data-test="input-loginEmail"]').type('daniel.com')
        cy.get('[data-test="input-loginPassword"]').type('abcd')
        cy.get('[data-test="submit-button"]').click()
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })
})