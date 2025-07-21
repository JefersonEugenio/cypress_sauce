/// <reference types="cypress" />

import CheckoutPage from "../pages/Checkout_page";

const checkoutPage = new CheckoutPage

When(/^eu inserir primeiro nome "([^"]*)", sobrenome "([^"]*)" e CEP "([^"]*)"$/, (nome,sobrenome,postal) => {
	checkoutPage.preencherDados(nome, sobrenome, postal)
});

Then(/^clicar no botao Continue$/, () => {
	checkoutPage.continue()
});

Then(/^sistema redireciona ou mensagem "([^"]*)"$/, (mensagem) => {
	if (mensagem === 'Overview') {
		checkoutPage.title(mensagem)
	} else {
		checkoutPage.error(mensagem)
	}
});
