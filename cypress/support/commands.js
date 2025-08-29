import { faker } from '@faker-js/faker'

Cypress.Commands.add('sessionLogin', () => {
    cy.visit('/')
    cy.get('#password').type(Cypress.env('user_password'))
})

Cypress.Commands.add('userLogin', (username) => {
    cy.get('#user-name').clear().type(username)
    cy.get('#login-button').click()
})

Cypress.Commands.add('adicionarProduto', (product) => {
    cy.get('.inventory_item_name')
    .contains(product)
    .should('be.visible')
    .parents('.inventory_item')
    .as('produtoItem')
    cy.get('@produtoItem')
    .find('.inventory_item_price')
    .invoke('text')
    .then(texto => {
        cy.wrap(texto.trim()).as('guardado')
    })
    
    cy.get('@produtoItem')
    .find('button')
    .click()
    
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', 1)
    cy.get('.shopping_cart_link').click()
})

Cypress.Commands.add('carrinhoProduto', (product) => {
    cy.contains('.btn', 'Checkout').should('be.visible').click()
})

Cypress.Commands.add('checkout', (product) => {
    cy.get('#first-name').should('be.visible')
            .type(faker.person.firstName())
        cy.get('#last-name').should('be.visible')
            .type(faker.person.lastName())
        cy.get('#postal-code').should('be.visible')
            .type(faker.location.zipCode('#######'))
        cy.get('#continue').should('be.visible').click()
})