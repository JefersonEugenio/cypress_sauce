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

Cypress.Commands.add('carrinhoProduto', () => {
    cy.contains('.btn', 'Checkout').should('be.visible').click()
})

Cypress.Commands.add('checkout', () => {
    cy.get('#first-name').should('be.visible')
            .type(faker.person.firstName())
        cy.get('#last-name').should('be.visible')
            .type(faker.person.lastName())
        cy.get('#postal-code').should('be.visible')
            .type(faker.location.zipCode('#######'))
        cy.get('#continue').should('be.visible').click()
})

Cypress.Commands.add('overview', () => {
    cy.get('.inventory_item_name').should('be.visible')
        cy.get('@guardado').then((textoGuardado) => {
        cy.get('.summary_subtotal_label')
            .should('be.visible')
            .should('contain', textoGuardado);
        });
        cy.get('@guardado').then(textoGuardado => {
            const valorItem = parseFloat(textoGuardado.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

            cy.get('.summary_tax_label')
                .should('be.visible')
                .invoke('text')
                .then(textoTaxa => {
                    const valorTaxa = parseFloat(textoTaxa.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

                    const soma = valorItem + valorTaxa;

                    cy.get('.summary_total_label')
                        .should('be.visible')
                        .invoke('text')
                        .then(textoTotal => {
                            const valorTotal = parseFloat(textoTotal.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

                            expect(valorTotal).to.be.closeTo(soma, 0.01);
                        });
                });
        });
        cy.get('#finish').should('be.visible').click()
        cy.get('#back-to-products').should('be.visible').click()
})