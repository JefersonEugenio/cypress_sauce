/// <reference types="cypress" />

import LoginPage from '../pages/Login_page'

const loginPage = new LoginPage

describe('Teste de Login', () => {
  const url = Cypress.config('baseUrl')
  it('Login com sucesso', () => {
    const title = 'Swag Labs'
    cy.acessarLogin(title)

  })

  it('Login com usuario invalido', () => {
    const password = Cypress.env('user_password')
    const mensagens = "Username and password do not match any user in this service"

    loginPage.acessarNavegador()
    loginPage.fillLogin("usuario_invalido", password)
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Login com senha incorreta', () => {
    const user = Cypress.env('user_name')
    const mensagens = "Username and password do not match any user in this service"

    loginPage.acessarNavegador()
    loginPage.fillLogin(user, "password_fail")
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Login com campos em branco', () => {
    const mensagens = "Epic sadface: Username is required"

    loginPage.acessarNavegador()
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Login a senha em branco', () => {
    const user = Cypress.env('user_name')
    const mensagens = "Epic sadface: Password is required"

    loginPage.acessarNavegador()
    loginPage.username(user)
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Login o usuario em branco', () => {
    const password = Cypress.env('user_password')
    const mensagens = "Epic sadface: Username is required"

    loginPage.acessarNavegador()
    loginPage.password(password)
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Inserir quantidade ilimitada de caracteres no campo username', () => {
    const password = Cypress.env('user_password')
    const mensagens = "Username and password do not match any user in this service"

    loginPage.acessarNavegador()
    loginPage.aleatorio(150)
    loginPage.password(password)
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })
})