describe('Login', () => {

  it('Realizar login', () => {

    cy.visit('/')
    cy.get('div[class="login_logo"]').should('have.text', 'Swag Labs')

    cy.realizarLogin('standard_user', 'secret_sauce')
      
  })

})