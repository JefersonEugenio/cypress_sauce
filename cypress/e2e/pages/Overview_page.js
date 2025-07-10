/// <reference types="cypress" />

import OverviewElement from "../elements/Overview_element";

const overviewElement = new OverviewElement

class OverviewPage {

    overviewFinish() {
        cy.get(overviewElement.finish())
            .should('be.visible')
            .click()
    }

    messageTitle(mensagem) {
        cy.get(overviewElement.textMessage())
            .should('have.text', mensagem)
    }

    backHome() {
        cy.get(overviewElement.backHome())
            .should('be.visible')
            .click()
    }

} export default OverviewPage