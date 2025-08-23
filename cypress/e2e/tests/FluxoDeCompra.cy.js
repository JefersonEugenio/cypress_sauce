/// <reference types="cypress" />

import Funcao from '../../support/funcao'

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('Fluxo de compra', () => {
  it('Compra com sucesso', () => {
    cy.visit(Cypress.config('baseUrl'))
    Funcao.fazLogin(user, password)
    Funcao.selecionadoProduto('Sauce Labs Backpack')
    Funcao.preencherInformacao()
    Funcao.finalizadoProduto()
  })

})