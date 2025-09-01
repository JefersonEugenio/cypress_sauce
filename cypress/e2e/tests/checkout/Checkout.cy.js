/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('A pagina do overview', () => {

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(Cypress.env('user_name'))
        cy.adicionarProduto('Sauce Labs Backpack')
        cy.carrinhoProduto()
    })

    it('Preenchimento completo e valido dos campos obrigatorios', () => {
        cy.fixture('checkout').then((test) => {
            cy.get('#first-name').type(test.FirstName)
        })
        cy.fixture('checkout').then((test) => {
            cy.get('#last-name').type(test.LastName)
        })
        cy.fixture('checkout').then((test) => {
            cy.get('#postal-code').type(test.PostalCode)
        })
        cy.get('#continue').should('be.visible').click()
    })

    it('Campos obrigatorio em branco', () => {
        cy.get('#continue').should('be.visible').click()
        cy.get('[data-test="error"]').should('be.visible').contains('Error: First Name is required')
    })

    it('Campo "First Name" em branco', () => {
        cy.get('#last-name').should('be.visible')
            .type(faker.person.lastName())
        cy.get('#postal-code').should('be.visible')
            .type(faker.location.zipCode('#######'))
        cy.get('#continue').should('be.visible').click()
        cy.get('[data-test="error"]').should('be.visible').contains('Error: First Name is required')
    })

    it('Campo "Last Name" em branco', () => {
        cy.get('#first-name').should('be.visible')
            .type(faker.person.firstName())
        cy.get('#postal-code').should('be.visible')
            .type(faker.location.zipCode('#######'))
        cy.get('#continue').should('be.visible').click()
        cy.get('[data-test="error"]').should('be.visible').contains('Error: Last Name is required')
    })
    it('Campo "Zip/Postal" em branco', () => {
        cy.get('#first-name').should('be.visible')
            .type(faker.person.firstName())
        cy.get('#last-name').should('be.visible')
            .type(faker.person.lastName())
        cy.get('#continue').should('be.visible').click()
        cy.get('[data-test="error"]').should('be.visible')
            .contains('Error: Postal Code is required')
    })
    it('Clicar em "Cancel" para retornar ao carrinho', () => {
        cy.get('#cancel').should('be.visible').click()
    })
})