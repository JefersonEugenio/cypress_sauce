/// <reference types="cypress" />

import CheckoutElement from "../elements/Checkout_element";
import OverviewElement from "../elements/Overview_element";

const checkoutElement = new CheckoutElement
const overviewElement = new OverviewElement

class CheckoutPage {

    preencherDados(nome, sobrenome, postal) {
        if (nome) {
            cy.get(checkoutElement.firstName())
                .should('be.visible')
                .type(nome)
        }
        if (sobrenome) {
            cy.get(checkoutElement.lastName())
                .should('be.visible')
                .type(sobrenome)
        }
        if (postal) {
            cy.get(checkoutElement.zipPostal())
                .should('be.visible')
                .type(postal)
        }
    }

    continue() {
        cy.get(checkoutElement.continueButton())
            .should('be.visible')
            .click()
    }

    cancel() {
        cy.get(checkoutElement.cancelButton())
            .should('be.visible')
            .click()
    }

    error(mensagem) {
        cy.get(checkoutElement.error())
            .should('be.visible')
            .contains(mensagem)
    }

    title(mensagem) {
        cy.get(overviewElement.title())
            .should('be.visible')
            .contains(mensagem)
    }
    
} export default CheckoutPage