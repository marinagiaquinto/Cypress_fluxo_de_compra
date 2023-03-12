describe('login', () => {

  it('Verificar pagina de login', () => {

    cy.visit('/')
    cy.title().should('eq', 'Swag Labs')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  
  })

})