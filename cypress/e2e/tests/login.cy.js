/// <reference types="cypress" />

import LoginPage from '../pages/Login_page'

const loginPage = new LoginPage

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

function fazLogin(user, password) {
  loginPage.fillLogin(user, password)
  loginPage.clickButton()
}

describe('Teste de Login', () => {
  
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  })
  
  it('Login com sucesso', () => {
    const title = 'Swag Labs'
    fazLogin(user, password)
    loginPage.validar(title)

  })

  it('Login com usuario invalido', () => {
    const mensagens = "Username and password do not match any user in this service"

    fazLogin("usuario_invalido", password)
    loginPage.validar(mensagens)

  })

  it('Login com senha incorreta', () => {
    const mensagens = "Username and password do not match any user in this service"
    
    fazLogin(user, "password_fail")
    loginPage.validar(mensagens)

  })

  it('Login com campos em branco', () => {
    const mensagens = "Epic sadface: Username is required"

    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Login a senha em branco', () => {
    const mensagens = "Epic sadface: Password is required"

    loginPage.username(user)
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Login o usuario em branco', () => {
    const mensagens = "Epic sadface: Username is required"

    loginPage.password(password)
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })

  it('Inserir quantidade ilimitada de caracteres no campo username', () => {
    const mensagens = "Username and password do not match any user in this service"

    loginPage.aleatorio(150)
    loginPage.password(password)
    loginPage.clickButton()
    loginPage.validar(mensagens)

  })
})