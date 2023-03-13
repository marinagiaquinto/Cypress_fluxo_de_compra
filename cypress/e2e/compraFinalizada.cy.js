describe('Compra finalizada', () => {

    it('verificar pagina de finalizacao', () => {

        cy.realizarLogin('standard_user', 'secret_sauce')
        cy.adicionarDoisItensCarrinho()
        cy.get('#checkout').click()
        cy.finalizarCompra('Marina', 'Giaquinto', '88475-586')
        cy.get('span[class="title"]').should('have.text', 'Checkout: Overview')

        cy.get('#item_4_title_link').should('be.visible')
        cy.get('#item_5_title_link').should('be.visible')
        cy.get('div[class="summary_info_label"]')
        cy.get('#finish')
            .should('be.visible')
            .click()

        cy.get('span[class="title"]').should('have.text', 'Checkout: Complete!')
        cy.get('h2[class="complete-header"]').should('have.text', 'Thank you for your order!')
        cy.get('#back-to-products')
            .should('be.visible')
            .click()
        
        cy.get('span[class="title"]').should('have.text', 'Products')

    })
 
})