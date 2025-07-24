/// <reference types="cypress" />

import MenuPage from "../pages/Menu_page";
import ProdutoPage from "../pages/Produto_page";

const menuPage = new MenuPage
const produtoPage = new ProdutoPage

When(/^acessar um produto "([^"]*)"$/, (item) => {
	produtoPage.acessarProduto(item)
});

When(/^clicar no simbolo de tres linhas$/, () => {
	menuPage.clicarMenu()
});

Then(/^clicar em 'All Items'$/, () => {
	menuPage.clicarAllItems()
});

Then(/^clicar em 'About'$/, () => {
	menuPage.clicarAbout()
});

Then(/^clicar em 'Logout'$/, () => {
    menuPage.clicarLogout()
});

Then(/^clicar em 'X'$/, () => {
    menuPage.clicarClose()
});
