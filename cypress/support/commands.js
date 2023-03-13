Cypress.Commands.add('realizarLogin', (nome , senha) => { 

    cy.visit('/')
    cy.get('#user-name').type(nome)
    cy.get('#password').type(senha)
    cy.get('#login-button').click()

})


Cypress.Commands.add('botaoAddCarrinho', (localizadorBotaoAdd) => {

    cy.get(localizadorBotaoAdd)
        .should('have.text', 'Add to cart')
        .should('have.css', 'border', '1px solid rgb(19, 35, 34)')
        .should('have.css', 'color', 'rgb(19, 35, 34)')
})


Cypress.Commands.add('botaoRemoverCarrinho', (localizadorBotaoRemover) => {

    cy.get(localizadorBotaoRemover)
        .should('have.text', 'Remove')
        .should('have.css', 'border', '1px solid rgb(226, 35, 26)')
        .should('have.css', 'color', 'rgb(226, 35, 26)')
})


Cypress.Commands.add('contagemItensCarrinho', (haveText, valor) => {

    cy.get('span[class="shopping_cart_badge"]').should(haveText, valor)

})

Cypress.Commands.add('iconeCarrinho', () => {

    cy.get('#shopping_cart_container').should('be.visible')

})


Cypress.Commands.add('adicionarDoisItensCarrinho', () => {

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.iconeCarrinho().click()

})


Cypress.Commands.add('finalizarCompra', (nome, sobrenome, CEP) => {

    cy.get('#first-name').type(nome)
    cy.get('#last-name').type(sobrenome)
    cy.get('#postal-code').type(CEP)
    cy.get('#continue').click()

})