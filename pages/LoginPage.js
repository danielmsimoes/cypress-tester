class LoginPage {

    // URL
    url = 'https://adopet-frontend-cypress.vercel.app/'

    // SELECTORS
    elements = {
        botaoLogin: () => cy.get('[data-test="login-button"]'),
        inputEmail: () => cy.get('[data-test="input-loginEmail"]'),
        inputSenha: () => cy.get('[data-test="input-loginPassword"]'),
        botaoEntrar: () => cy.get('[data-test="submit-button"]')
    }

    // ACTIONS
    acessarPaginaInicial() {
        cy.visit(this.url)
    }

    IrParaLogin() {
        this.elements.botaoLogin().click()
    }

    preencherEmail(email) {
        this.elements.inputEmail().type(email)
    }

    preencherSenha(senha) {
        this.elements.inputSenha().type(senha)
    }

    submeterLogin() {
        this.elements.botaoEntrar().click()
    }

    // FLUXOS
    realizarLogin(email, senha) {
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.submeterLogin()
    }

    //ASSERT
    validarLoginSucesso() {
        cy.url().should('include', '/home')
    }

    validarInputsVazios() {
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    }

    validarLoginError() {
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
}
}

export default new LoginPage()