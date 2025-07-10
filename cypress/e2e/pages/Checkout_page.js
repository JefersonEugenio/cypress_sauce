/// <reference types="cypress" />

import CheckoutElement from "../elements/Checkout_element";

const checkoutElement = new CheckoutElement

class CheckoutPage {

    preencherDados() {
        cy.get(checkoutElement.firstName())
            .should('be.visible')
            .type('Jeferson')
        cy.get(checkoutElement.lastName())
            .should('be.visible')
            .type('Lopes')
        cy.get(checkoutElement.zipPostal())
            .should('be.visible')
            .type('9876543210')
    }

    continue() {
        cy.get(checkoutElement.continueButton())
            .should('be.visible')
            .click()
    }
} export default CheckoutPage