/// <reference types="cypress" />

describe('A pagina do carrinho', () => {

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(Cypress.env('user_name'))
        cy.adicionarProduto('Sauce Labs Backpack')
    })

    it('Remover produto do carrinho', () => {
        cy.contains('.btn', 'Remove').should('be.visible').click()
    })

    it('Continuar comprando pelo carrinho', () => {
        cy.contains('.btn', 'Continue').should('be.visible').click()
    })
    
    it('Ir para checkout pelo carrinho', () => {
        cy.contains('.btn', 'Checkout').should('be.visible').click()
    })
})