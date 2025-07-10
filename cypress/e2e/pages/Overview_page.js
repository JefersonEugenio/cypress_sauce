/// <reference types="cypress" />

import OverviewElement from "../elements/Overview_element";

const overviewElement = new OverviewElement

class OverviewPage {

    overviewFinish() {
        cy.get(overviewElement.finish())
            .should('be.visible')
            .click()
    }

} export default OverviewPage