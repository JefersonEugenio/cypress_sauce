/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker'
import LoginElement from "../elements/Login_element"

const loginElement = new LoginElement
const url = Cypress.config('baseUrl')

class LoginPage {

    aleatorio(numero) {
        const length = Number(numero)
        const name = faker.string.alpha({ length: length})
        console.log('nome gerado: ', name)
        this.username(name)
    }

    acessarNavegador() {
        cy.visit(url)
    }

    username(user) {
        cy.get(loginElement.usernameInput())
            .should('be.visible')
            .type(user)
            .should('have.value', user)
    }

    password(password) {
        cy.get(loginElement.passwordInput())
            .should('be.visible')
            .type(password)
    }

    fillLogin(user, pass) {
        cy.get(loginElement.usernameInput())
            .should('be.visible')
            .type(user)
            .should('have.value', user)
        cy.get(loginElement.passwordInput())
            .should('be.visible')
            .type(pass)
    }
    
    clickButton() {
        cy.get(loginElement.loginButton()).click()
    }

    validar(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

} export default LoginPage