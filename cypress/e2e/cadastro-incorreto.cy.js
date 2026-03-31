import CadastroPage from "../../pages/CadastroPage"

describe('Página de Cadastro - Incorreto', () => {
    beforeEach(() => {
        CadastroPage.acessarPaginaInicial()
        CadastroPage.irParaCadastro()
    })
    it('Não preencher os campos do formulário e enviar, verificar mensagens de erro', () => {
        CadastroPage.submeterCadastro()
        CadastroPage.validarInputsVazios()
    })

    it('Verificar mensagens de erro em um cadastro inválido', () => {
        cy.intercept(
            'POST',
            '**/adotante/register',
            {statusCode:400, }).as('cadastroInvalido')

        CadastroPage.realizarCadastro('Ana de Jesus', 'ana@email.com', 'Senha123', 'Senha123')
        cy.wait('@cadastroInvalido')
        CadastroPage.validarCadastroInvalido()
    })
})