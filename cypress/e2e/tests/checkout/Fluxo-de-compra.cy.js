/// <reference types="cypress" />

describe('Fluxo de compra', () => {
  it('Compra com sucesso', () => {
    cy.sessionLogin()
    cy.userLogin(Cypress.env('user_name'))
    cy.adicionarProduto('Sauce Labs Backpack')
    cy.carrinhoProduto()
    cy.checkout()
    cy.overview()
  })

})