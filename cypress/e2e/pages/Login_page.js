/// <reference types="cypress" /> 

import LoginElement from "../elements/Login_element"

const loginElement = new LoginElement
const url = Cypress.config('baseUrl')

class LoginPage {

    acessarNavegador() {
        cy.visit(url)
    }

    fillLogin(user, pass) {
        cy.get(loginElement.usernameInput()).type(user)
        cy.get(loginElement.passwordInput()).type(pass)
    }
    
    clickButton() {
        cy.get(loginElement.loginButton()).click()
    }

    validar(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

} export default LoginPage