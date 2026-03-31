class CadastroPage {

    // URL
    url = 'https://adopet-frontend-cypress.vercel.app/'

    // SELECTORS
    elements = {
        botaoCadastrar: () => cy.get('[data-test="register-button"]'),
        inputNome: () => cy.get('[data-test="input-name"]'),
        inputEmail: () => cy.get('[data-test="input-email"]'),
        inputSenha: () => cy.get('[data-test="input-password"]'),
        inputConfirmarSenha: () => cy.get('[data-test="input-confirm-password"]'),
        botaoEnviarCadastro: () => cy.get('[data-test="submit-button"]')
    }
    // ACTIONS
    acessarPaginaInicial() {
        cy.visit(this.url)
    }

    irParaCadastro() {
        this.elements.botaoCadastrar().click()
    }

    preencherNome(nome) {
        this.elements.inputNome().type(nome)
    }

    preencherEmail(email) {
        this.elements.inputEmail().type(email)
    }
    
    preencherSenha(senha) {
        this.elements.inputSenha().type(senha)
    }
    
    confirmarSenha(senha) {
        this.elements.inputConfirmarSenha().type(senha)
    }

    submeterCadastro() {
        this.elements.botaoEnviarCadastro().click()
    }

    // FLUXOS
    realizarCadastro(nome, email, senha) {
        this.preencherNome(nome)
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.confirmarSenha(senha)
        this.submeterCadastro()
    }

    //ASSERT
    validarCadastroSucesso() {
        cy.url().should('include', '/login')
    }

    validarInputsVazios() {
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Crie uma senha').should('be.visible')
        cy.contains('Repita a senha criada acima').should('be.visible')
    } 

    validarCadastroInvalido(){
        cy.contains('Falha ao cadastrar!').should('be.visible')
    }


}

export default new CadastroPage()