describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //Acessar site via URL
    cy.get('[data-test="register-button"]').click(); //Vê se contém na página e clica
  })
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Ana de Jesus', 'ana@email.com', 'Senha123', 'Senha123')
  })
})