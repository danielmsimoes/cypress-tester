import { usuarios } from '../fixtures/usuarios.json'
import CadastroPage from '../../pages/CadastroPage';

describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //Acessar site via URL
    cy.get('[data-test="register-button"]').click(); //Vê se contém na página e clica
})
  usuarios.forEach(usuario => {
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () =>{
        CadastroPage.elements.inputNome().clear().type(usuario.name)
        CadastroPage.elements.inputEmail().clear().type(usuario.email)
        CadastroPage.elements.inputSenha().clear().type(usuario.password)
        CadastroPage.elements.inputConfirmarSenha().clear().type(usuario.password)
        CadastroPage.elements.botaoEnviarCadastro().click()
    })
  })
})