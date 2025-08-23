/// <reference types="cypress" />

import LoginPage from '../pages/Login_page'
import ProdutoPage from "../pages/Produto_page";

const loginPage = new LoginPage
const produtoPage = new ProdutoPage

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe('A pagina do produto', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        loginPage.fillLogin(user, password)
        loginPage.clickButton()
    })

    it('exibir lista de produtos após Login', () => {
        produtoPage.titleProduto('Products')
        produtoPage.validarProdutos()
    })

    it('adicionar produto ao carrinho', () => {
        produtoPage.adicionarProduto('Sauce Labs Backpack')
        produtoPage.verificarIconeCarrinhoValor(1)
    })

    it('remover produto do carrinho', () => {
        produtoPage.adicionarProduto('Sauce Labs Backpack')
        produtoPage.removerProduto('Sauce Labs Backpack')
        produtoPage.verificarIconeCarrinhoValor("")
    })

    it('verificar ordenacao correta de produto pelo menu', () => {
        produtoPage.verificarMenuOrdenacao()
        produtoPage.selecionarMenuOrdenacao('Name (Z to A)')
        produtoPage.selecionarMenuOrdenacao('Price (low to high)')
        produtoPage.selecionarMenuOrdenacao('Price (high to low)')
    })
})