/// <reference types="cypress" />

import LoginPage from "../pages/Login_page";
import ProdutoPage from "../pages/Produto_page";
import CarrinhoPage from "../pages/Carrinho_page";

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

const loginPage = new LoginPage
const produtoPage = new ProdutoPage
const carrinhoPage = new CarrinhoPage

describe('A pagina do carrinho', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        loginPage.fillLogin(user, password)
        loginPage.clickButton()
        produtoPage.titleProduto('Products')
        produtoPage.validarProdutos()
        produtoPage.adicionarProduto('Sauce Labs Backpack')
        produtoPage.verificarIconeCarrinhoValor(1)
        produtoPage.acessarCarrinho()
    })

    it('Remover produto do carrinho', () => {
        carrinhoPage.removeBotao('Remove')
    })

    it('Continuar comprando pelo carrinho', () => {
        carrinhoPage.continueShopping()
    })

    it('Ir para checkout pelo carrinho', () => {
        carrinhoPage.checkout()
    })
})