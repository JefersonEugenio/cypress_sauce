/// <reference types="cypress" />

import MenuElement from "../elements/Menu_element";

const menuElement = new MenuElement

class MenuPage {

    clicarMenu() {
        cy.contains(menuElement.buttonMenu(), 'Open Menu')
            .should('be.visible')
            .click()
    }

    clicarAllItems() {
        cy.contains(menuElement.allItems(), 'All Items')
            .should('be.visible')
            .click()
    }

    clicarAbout() {
        cy.contains(menuElement.about(), 'About')
            .should('be.visible')
            .should('have.attr', 'href', 'https://saucelabs.com/')
    }

    clicarAboutg() {
        cy.get(menuElement.aabout())
            .should('be.visible')
            .should('have.attr', 'href')
            .and('include', 'saucelabs.com')
    }

    clicarLogout() {
        cy.contains(menuElement.logout(), 'Logout')
            .should('be.visible')
            .click()
    }

    clicarClose() {
        cy.contains(menuElement.close(), 'Close Menu')
            .should('be.visible')
            .click()
    }
    
} export default MenuPage