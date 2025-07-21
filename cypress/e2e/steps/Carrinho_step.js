/// <reference types="cypress" />

import CarrinhoPage from "../pages/Carrinho_page";

const carrinhoPage = new CarrinhoPage

When(/^verificar se há um produto listado na pagina do carrinho$/, () => {
	carrinhoPage.verificarProduto()
});

Then(/^clicar no botao "([^"]*)"$/, (remove) => {
	carrinhoPage.removeBotao(remove)
});

Then(/^clicar no botao "([^"]*)"$/, (checkout) => {
    carrinhoPage.checkoutBotao(checkout)
});

Then(/^validar o campo 'QTY' "([^"]*)"$/, (numero) => {
	carrinhoPage.verificarQuantidadeCampo(numero)
});

Then(/^alterar o valor do campo 'QTY' para qualquer numero com positivo "([^"]*)"$/, (numero) => {
	carrinhoPage.alterarQuantidadeCampoTest(numero)
});
