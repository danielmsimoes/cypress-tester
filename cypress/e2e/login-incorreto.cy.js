import LoginPage from "../../pages/LoginPage";

describe('Página de login', () => {
    beforeEach(() => {
        LoginPage.acessarPaginaInicial()
        LoginPage.IrParaLogin()
    })

    it('Acessa a página de login, não preenche o campo de email e senha e clica em entrar e verifica ambos erros', () => {
        LoginPage.submeterLogin()
        LoginPage.validarInputsVazios()
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {

        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost')

        LoginPage.realizarLogin('ana@email.com', 'Senha123')
        cy.wait('@stubPost')
        LoginPage.validarLoginError()
    })
})