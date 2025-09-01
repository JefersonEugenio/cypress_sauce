/// <reference types="cypress" />

describe('A pagina do produto', () => {

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(Cypress.env('user_name'))
    })

    it('exibir lista de produtos após Login', () => {
        cy.get('.title').should('have.text', 'Products')
        cy.get('.inventory_item_name').should('be.visible')
    })

    it('adicionar produto ao carrinho', () => {
        cy.get('.inventory_item_name')
            .contains('Sauce Labs Backpack')
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

    it('remover produto do carrinho', () => {
        cy.get('.inventory_item_name')
            .contains('Sauce Labs Backpack')
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

        cy.get('@produtoItem')
            .find('button')
            .click()

        cy.get('.shopping_cart_badge').should('not.exist')
    })

    it('verificar ordenacao correta de produto pelo menu', () => {
        cy.get('.product_sort_container').should('be.visible')
        cy.get('.product_sort_container').should('be.visible').select('Name (Z to A)')
        cy.get('.product_sort_container').should('be.visible').select('Price (low to high)')
        cy.get('.product_sort_container').should('be.visible').select('Price (high to low)')
    })
})