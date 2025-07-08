/// <reference types="cypress" />

import LoginPage from "../pages/Login_page";

const loginPage = new LoginPage

before(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})

after(() => {
  cy.log('Finalizou o teste de login')
})


Given(/^eu acesse a pagina home da aplicacao$/, () => {
  loginPage.acessarNavegador()
});

When(/^eu inserir meu email e senha validos$/, () => {
	const user = Cypress.env('user_name')
  const password = Cypress.env('user_password')

  loginPage.fillLogin(user, password)
});

When(/^clicar no botao entrar$/, () => {
  loginPage.clickButton()
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
  loginPage.validar(mensagem)
});