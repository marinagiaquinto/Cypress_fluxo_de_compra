describe('Finalizar compra', () => {

    it('finalizar a compra', () => {

        cy.realizarLogin('standard_user', 'secret_sauce')
        cy.adicionarDoisItensCarrinho()
        cy.get('#checkout').click()
        cy.get('span[class="title"]').should('have.text', 'Checkout: Your Information')

        cy.finalizarCompra('Marina', 'Giaquinto', '88475-586')

    })

})