/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import CheckoutElement from "../elements/Checkout_element";
import OverviewElement from "../elements/Overview_element";

const checkoutElement = new CheckoutElement
const overviewElement = new OverviewElement

const primeiroNome = faker.person.firstName()

class CheckoutPage {

    preencherDados() {

        cy.get(checkoutElement.firstName())
            .should('be.visible')
            .type(faker.person.firstName())

        cy.get(checkoutElement.lastName())
            .should('be.visible')
            .type(faker.person.lastName())

        cy.get(checkoutElement.zipPostal())
            .should('be.visible')
            .type(faker.location.zipCode('#######'))
    }

    preencherFirstName() {
        cy.get(checkoutElement.firstName())
            .should('be.visible')
            .type(faker.person.firstName())
    }

    preencherLastName() {
        cy.get(checkoutElement.lastName())
            .should('be.visible')
            .type(faker.person.lastName())
    }

    preencherPostal() {
        cy.get(checkoutElement.zipPostal())
            .should('be.visible')
            .type(faker.location.zipCode('#######'))
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