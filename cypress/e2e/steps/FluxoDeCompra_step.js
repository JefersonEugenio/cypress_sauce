/// <reference types="cypress" />

import ProdutoPage from "../pages/Produto_page"
import CarrinhoPage from "../pages/Carrinho_page"
import CheckoutPage from "../pages/Checkout_page"
import OverviewPage from "../pages/Overview_page"

const produtoPage = new ProdutoPage
const carrinhoPage = new CarrinhoPage
const checkoutPage = new CheckoutPage
const overviewPage = new OverviewPage

before(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})

after(() => {
  cy.log('Finalizou o teste de login')
})

Given(/^que estou na página inicial da aplicação e estou autenticado com email e senha válidos, tenho acesso ao "([^"]*)"$/, (title) => {
	cy.acessarLogin(title)
});

When(/^adiciono um produto "([^"]*)" ao carrinho e acesso o carrinho$/, (item) => {
	produtoPage.validarProdutos()
	produtoPage.adicionarProduto(item)
	produtoPage.iconeCarrinho()
	produtoPage.acessarCarrinho()
});

When(/^inicio o processo de checkout e preencho as informações do comprador nome "([^"]*)", sobrenome "([^"]*)" e postal "([^"]*)"$/, (nome,sobrenome,postal) => {
	carrinhoPage.checkout()
	checkoutPage.preencherDados(nome, sobrenome, postal)
	checkoutPage.continue()
});

Then(/^finalizo a compra com sucesso e mensagem "([^"]*)"$/, (mensagem) => {
	overviewPage.overviewFinish()
	overviewPage.messageTitle(mensagem)
	overviewPage.backHome()
	produtoPage.validarProdutos()
});
