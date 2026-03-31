import CadastroPage from "../../pages/CadastroPage";

describe('Página de Cadastro', () => {
  beforeEach(() => {
    CadastroPage.acessarPaginaInicial()
    CadastroPage.irParaCadastro()
  })
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    cy.intercept(
      'POST',
      '**/adotante/register',
      {
        statusCode: 201,
        body: {
          message: 'Cadastro realizado com sucesso'
        }
      }
    ).as('cadastroSucesso')

    CadastroPage.realizarCadastro('Ana de Jesus', 'ana@email.com', 'Senha123', 'Senha123')

    cy.wait('@cadastroSucesso')

    CadastroPage.validarCadastroSucesso()
  })
})