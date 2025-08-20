/// <reference types="cypress" />

describe('Fluxo de compra', () => {
  const url = Cypress.config('baseUrl')
  it('Compra com sucesso', () => {
    const title = 'Swag Labs'
    cy.acessarLogin(title)
    cy.selecionadoProduto()
    cy.preencherInformacao()
    cy.finalizadoProduto()

  })

})