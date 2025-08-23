/// <reference types="cypress" />

import LoginPage from "../pages/Login_page";
import ProdutoPage from "../pages/Produto_page";
import CarrinhoPage from "../pages/Carrinho_page";
import CheckoutPage from "../pages/Checkout_page";
import OverviewPage from "../pages/Overview_page";

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

const loginPage = new LoginPage
const produtoPage = new ProdutoPage
const carrinhoPage = new CarrinhoPage
const checkoutPage = new CheckoutPage
const overviewPage = new OverviewPage

describe('A pagina do overview', () => { 

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        loginPage.fillLogin(user, password)
        loginPage.clickButton()
        produtoPage.titleProduto('Products')
        produtoPage.validarProdutos()
        produtoPage.adicionarProduto('Sauce Labs Backpack')
        produtoPage.verificarIconeCarrinhoValor(1)
        produtoPage.acessarCarrinho()
        carrinhoPage.checkout()
        checkoutPage.preencherDados()
        checkoutPage.continue()
    })

    it('Finalizar compra com produto no carrinho', () => {
        overviewPage.verificarProduto()
        overviewPage.verificarItemTotal()
        overviewPage.verificarCalcular()
        overviewPage.overviewFinish()
        overviewPage.message()
        overviewPage.backHome()
    })
})