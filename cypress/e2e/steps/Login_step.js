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

When(/^eu deixo os campos de email e senha em branco$/, () => {
  console.log("Deixam os campos em branco")
});

When(/^clicar no botao entrar$/, () => {
  loginPage.clickButton()
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
  loginPage.validar(mensagem)
});

When(/^eu inserir meu email invalido e senha valido$/, () => {
  const password = Cypress.env('user_password')

  loginPage.fillLogin("usuario_invalido", password)
});

When(/^eu inserir meu email e senha incorreta$/, () => {
	const user = Cypress.env('user_name')

  loginPage.fillLogin(user, "senha_errada")
});

When(/^eu deixo o campo a senha em branco$/, () => {
	const user = Cypress.env('user_name')

  loginPage.username(user)
});

Then(/^exibida mensagem de erro "([^"]*)"$/, (mensagens) => {
  loginPage.validar(mensagens)
});

When(/^eu inserir "([^"]*)" caracteres aleatorio no campo username$/, (numero) => {
  loginPage.aleatorio(numero)
  const password = Cypress.env('user_password')
  loginPage.password(password)
});

Then(/^exibida mensagem de erro indicando o limite de caracteres$/, () => {
	return true;
});
