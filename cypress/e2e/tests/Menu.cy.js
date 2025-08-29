/// <reference types="cypress" />

describe('Acessar cada opção do menu funciona corretamente', () => { 

    beforeEach(() => {
        cy.sessionLogin()
        cy.userLogin(Cypress.env('user_name'))
    })

    it('Navegar para tela principal pelo menu', () => {
        cy.get('.inventory_item_name')
            .contains('Sauce Labs Backpack')
            .should('be.visible')
            .parents('.inventory_item')
            .find('.inventory_item_name')
            .click()
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#inventory_sidebar_link').should('be.visible').click()
    })

    it('Acessar site Sauce Labs pelo menu', () => {
        cy.get('.inventory_item_name')
            .contains('Sauce Labs Backpack')
            .should('be.visible')
            .parents('.inventory_item')
            .find('.inventory_item_name')
            .click()
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#about_sidebar_link').should('be.visible')
            .and('have.attr', 'href', 'https://saucelabs.com/')
    })

    it('Logout pelo menu', () => {
        cy.get('.inventory_item_name')
            .contains('Sauce Labs Backpack')
            .should('be.visible')
            .parents('.inventory_item')
            .find('.inventory_item_name')
            .click()
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#logout_sidebar_link').should('be.visible').click()
    })

    it('Fechar menu lateral pelo botao "X"', () => {
        cy.get('.inventory_item_name')
            .contains('Sauce Labs Backpack')
            .should('be.visible')
            .parents('.inventory_item')
            .find('.inventory_item_name')
            .click()
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#react-burger-cross-btn').should('be.visible').click()
    })

})