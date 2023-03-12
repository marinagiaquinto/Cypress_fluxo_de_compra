describe('produto', () => {

  it('verificar pagina de produto', () => {
      
      cy.wait(2000)
      cy.visit('/')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()

      cy.get('span[class="title"]').should('have.text', 'Products')
  
  })

  it('selecionar produtos', () => {

    cy.wait(2000)
      
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#shopping_cart_container').should('be.visible')
    cy.get('span[class="shopping_cart_badge"]').should('not.be.NaN')

    cy.get('#add-to-cart-sauce-labs-backpack')
      .should('have.text', 'Add to cart')
      .should('have.css', 'border', '1px solid rgb(19, 35, 34)')
      .should('have.css', 'color', 'rgb(19, 35, 34)')
          
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    cy.get('#remove-sauce-labs-backpack')
      .should('have.text', 'Remove')
      .should('have.css', 'border', '1px solid rgb(226, 35, 26)')
      .should('have.css', 'color', 'rgb(226, 35, 26)')

    cy.get('span[class="shopping_cart_badge"]').should('have.text', '1')

    cy.get('#add-to-cart-sauce-labs-fleece-jacket')
      .should('have.text', 'Add to cart')
      .should('have.css', 'border', '1px solid rgb(19, 35, 34)')
      .should('have.css', 'color', 'rgb(19, 35, 34)')
          
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()


    cy.get('#remove-sauce-labs-fleece-jacket')
      .should('have.text', 'Remove')
      .should('have.css', 'border', '1px solid rgb(226, 35, 26)')
      .should('have.css', 'color', 'rgb(226, 35, 26)')
      
    cy.get('span[class="shopping_cart_badge"]').should('have.text', '2')

  })

})
