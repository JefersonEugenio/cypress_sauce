/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import CheckoutPage from "../pages/Checkout_page";

const checkoutPage = new CheckoutPage

When(/^eu inserir primeiro nome "([^"]*)", sobrenome "([^"]*)" e CEP "([^"]*)"$/, (nome,sobrenome,postal) => {
	const primeiroNome = nome === 'faker' ? faker.person.firstName() : nome;
	const ultimoNome = sobrenome === 'faker' ? faker.person.lastName() : sobrenome;
	const cep = postal === 'faker' ? faker.location.zipCode('#######') : postal

	checkoutPage.preencherDados(primeiroNome, ultimoNome, cep)
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
