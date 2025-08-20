/// <reference types="cypress" />

import MenuPage from "../pages/Menu_page";
import ProdutoPage from "../pages/Produto_page";

const menuPage = new MenuPage
const produtoPage = new ProdutoPage

describe('Acessar cada opção do menu funciona corretamente', () => { 

    beforeEach(() => {
        const title = 'Swag Labs'
        cy.acessarLogin(title)
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