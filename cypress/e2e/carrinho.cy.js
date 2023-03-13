describe('Pagina do carrinho', () => {


    it('verificar página do carrinho', () => {

        cy.realizarLogin('standard_user', 'secret_sauce')
        cy.adicionarDoisItensCarrinho()

        cy.get('div[class="app_logo"]').should('be.visible')

        cy.iconeCarrinho()
        cy.contagemItensCarrinho('have.text', '2')

        cy.get('#item_4_title_link').should('be.visible')
        cy.botaoRemoverCarrinho('#remove-sauce-labs-backpack')
        cy.get('#item_5_title_link').should('be.visible')
        cy.botaoRemoverCarrinho('#remove-sauce-labs-fleece-jacket')

        cy.get('#checkout')
            .should('be.visible')
            .click()

    })
    
})