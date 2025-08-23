/// <reference types="cypress" />

import LoginPage from '../pages/Login_page'
import MenuPage from "../pages/Menu_page";
import ProdutoPage from "../pages/Produto_page";

const loginPage = new LoginPage
const menuPage = new MenuPage
const produtoPage = new ProdutoPage

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('Acessar cada opção do menu funciona corretamente', () => { 

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        loginPage.fillLogin(user, password)
        loginPage.clickButton()
    })

    it('Navegar para tela principal pelo menu', () => {
        produtoPage.acessarProduto('Sauce Labs Backpack')
        menuPage.clicarMenu()
        menuPage.clicarAllItems()
    })

    it('Acessar site Sauce Labs pelo menu', () => {
        produtoPage.acessarProduto('Sauce Labs Backpack')
        menuPage.clicarMenu()
        menuPage.clicarAbout()
    })

    it('Logout pelo menu', () => {
        produtoPage.acessarProduto('Sauce Labs Backpack')
        menuPage.clicarMenu()
        menuPage.clicarLogout()
    })

    it('Fechar menu lateral pelo botao "X"', () => {
        produtoPage.acessarProduto('Sauce Labs Backpack')
        menuPage.clicarMenu()
        menuPage.clicarClose()
    })

})