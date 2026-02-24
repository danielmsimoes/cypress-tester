describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //Acessar site via URL
    cy.get('[data-test="register-button"]').click(); //Vê se contém na página e clica
  })
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Ana de Jesus')
    cy.get('[data-test="input-email"]').type('ana@email.com')
    cy.get('[data-test="input-password"]').type('Senha123')
    cy.get('[data-test="input-confirm-password"]').type('Senha123')
    cy.get('[data-test="submit-button"]').click(); //Clica em confirmar  
  })
})