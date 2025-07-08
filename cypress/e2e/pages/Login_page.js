/// <reference types="cypress" /> 

import LoginElement from "../elements/Login_element"

const loginElement = new LoginElement
const url = Cypress.config('baseUrl')

class LoginPage {

    acessarNavegador() {
        cy.visit(url)
    }

    fillLogin(user, pass) {
        cy.get(loginElement.usernameInput()).should('be.visible').type(user).should('have.value', user)
        cy.get(loginElement.passwordInput()).should('be.visible').type(pass)
    }
    
    clickButton() {
        cy.get(loginElement.loginButton()).click()
    }

    validar(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

} export default LoginPage