/// <reference types="cypress" />

import LoginPage from "../pages/Login_page";
import ProdutoPage from "../pages/Produto_page";
import CarrinhoPage from "../pages/Carrinho_page";
import CheckoutPage from "../pages/Checkout_page";

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

const loginPage = new LoginPage
const produtoPage = new ProdutoPage
const carrinhoPage = new CarrinhoPage
const checkoutPage = new CheckoutPage

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
    })

    it('Preenchimento completo e valido dos campos obrigatorios', () => {
        checkoutPage.preencherDados()
        checkoutPage.continue()
    })
    
    it('Campos obrigatorio em branco', () => {
        checkoutPage.continue()
        checkoutPage.error('Error: First Name is required')
    })
    
    it('Campo "First Name" em branco', () => {
        checkoutPage.preencherLastName()
        checkoutPage.preencherPostal()
        checkoutPage.continue()
        checkoutPage.error('Error: First Name is required')
    })

    it('Campo "Last Name" em branco', () => {
        checkoutPage.preencherFirstName()
        checkoutPage.preencherPostal()
        checkoutPage.continue()
        checkoutPage.error('Error: Last Name is required')
    })
    it('Campo "Zip/Postal" em branco', () => {
        checkoutPage.preencherFirstName()
        checkoutPage.preencherLastName()
        checkoutPage.continue()
        checkoutPage.error('Error: Postal Code is required')
    })
    it('Clicar em "Cancel" para retornar ao carrinho', () => {
        checkoutPage.cancel()
    })
})