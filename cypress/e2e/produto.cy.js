describe('Pagina de Produto', () => {

    it('adicionar produtos ao carrinho', () => {

        cy.realizarLogin('standard_user', 'secret_sauce')
        cy.get('span[class="title"]').should('have.text', 'Products')
  
        cy.iconeCarrinho()
        cy.contagemItensCarrinho('not.be.NaN')

        cy.botaoAddCarrinho('#add-to-cart-sauce-labs-backpack')   
        cy.get('#add-to-cart-sauce-labs-backpack').click()
  
        cy.botaoRemoverCarrinho('#remove-sauce-labs-backpack')
        cy.contagemItensCarrinho('have.text', '1')

        
        cy.botaoAddCarrinho('#add-to-cart-sauce-labs-fleece-jacket')  
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
  
        cy.botaoRemoverCarrinho('#remove-sauce-labs-fleece-jacket')
        cy.contagemItensCarrinho('have.text', '2')
        
  
        cy.iconeCarrinho().click()
  
  })

})