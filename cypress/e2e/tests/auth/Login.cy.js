/// <reference types="cypress" />

describe('Teste de Login', () => {

  beforeEach(() => {
    cy.sessionLogin()
  })

  it('Login (standard_user) com sucesso', () => {
    cy.userLogin(Cypress.env('user_name'))
  })

  it('Login (locked_out_user) com sucesso', () => {
    cy.userLogin(Cypress.env('user_locked'))
  })

  it('Login (problem_user) com sucesso', () => {
    cy.userLogin(Cypress.env('user_problem'))
  })

  it('Login (performance_glitch_user) com sucesso', () => {
    cy.userLogin(Cypress.env('user_performance'))
  })

  it('Login (error_user) com sucesso', () => {
    cy.userLogin(Cypress.env('user_error'))
  })

  it('Login com usuario invalido', () => {
    const mensagens = "Epic sadface: Username and password do not match any user in this service"

    cy.userLogin('usuario_invalido')
    cy.get('[data-test="error"]').should('have.text', mensagens)

  })

  it('Login com senha incorreta', () => {
    const mensagens = "Epic sadface: Username and password do not match any user in this service"

    cy.get('#password').clear().type('password_fail')
    cy.userLogin(Cypress.env('user_name'))
    cy.get('[data-test="error"]').should('have.text', mensagens)

  })

  it('Login com campos em branco', () => {
    const mensagens = "Epic sadface: Username is required"

    cy.get('#password').clear()
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('have.text', mensagens)
  })

  it('Login a senha em branco', () => {
    const mensagens = "Epic sadface: Password is required"

    cy.get('#password').clear()
    cy.userLogin(Cypress.env('user_name'))
    cy.get('[data-test="error"]').should('have.text', mensagens)
  })

  it('Login o usuario em branco', () => {
    const mensagens = "Epic sadface: Username is required"

    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('have.text', mensagens)

  })

})