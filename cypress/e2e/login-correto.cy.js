import LoginPage from "../../pages/LoginPage";

describe('Página de Login', () => {
    beforeEach(() => {
        LoginPage.acessarPaginaInicial()
        LoginPage.IrParaLogin()
     })

    it('Acessa a página de login e preenche os dados corretamente e é redirecionado para página /home', () => {
        LoginPage.realizarLogin('ana@email.com', 'Senha123') 
        LoginPage.validarLoginSucesso()
    })
})