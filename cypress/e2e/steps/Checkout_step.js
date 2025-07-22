/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import CheckoutPage from "../pages/Checkout_page";
import OverviewElement from '../elements/Overview_element';

const checkoutPage = new CheckoutPage
const overviewElement = new OverviewElement

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
	cy.get(overviewElement.title()).then(($titulo) => {
		const tituloVisivel = $titulo.text().trim();
		if (tituloVisivel.includes(mensagem)) {
			expect(tituloVisivel).to.include(mensagem);
		} else {
			checkoutPage.error(mensagem)
		}
	})
});

When(/^clicar no botao Cancel$/, () => {
	checkoutPage.cancel()
});
