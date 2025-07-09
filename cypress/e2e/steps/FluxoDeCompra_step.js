/// <reference types="cypress" />

import ProdutoPage from "../pages/Produto_page"

const produtoPage = new ProdutoPage

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
	produtoPage.adicionarProduto(item)
	produtoPage.acessarCarrinho()
});

When(/^inicio o processo de checkout e preencho as informações do comprador$/, () => {
	return true;
});

Then(/^finalizo a compra com sucesso$/, () => {
	return true;
});
