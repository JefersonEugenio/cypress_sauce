/// <reference types="cypress" />

import ProdutoPage from "../pages/Produto_page";
import LoginPage from "../pages/Login_page";

const loginPage = new LoginPage
const produtoPage = new ProdutoPage

before(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})

after(() => {
  cy.log('Finalizou o teste de login')
})

When(/^visualizar a pagina de produtos$/, () => {
    produtoPage.titleProduto()
});

Then(/^os produtos devem estar visieis na pagina$/, () => {
    produtoPage.validarProdutos()
});

When(/^clicar no botao 'Add to cart' um produto de "([^"]*)"$/, (item) => {
  produtoPage.adicionarProduto(item)
});

When(/^clicar no botao 'Remove' um produto de "([^"]*)"$/, (item) => {
	produtoPage.removerProduto(item)
});

Then(/^verificar se o icone do carrinho "([^"]*)"$/, (numero) => {
	produtoPage.verificarIconeCarrinhoValor(numero)
});

When(/^visualizar existe menu de ordenacao$/, () => {
	produtoPage.verificarMenuOrdenacao()
});

Then(/^seleciona a opcao "([^"]*)"$/, (value) => {
	produtoPage.selecionarMenuOrdenacao(value)
});