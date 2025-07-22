/// <reference types="cypress" />

import OverviewPage from "../pages/Overview_page";

const overviewPage = new OverviewPage


When(/^verificar se tem produto na pagina do Overview$/, () => {
	overviewPage.verificarProduto()
});

When(/^verificar valor do produto correto$/, () => {
	overviewPage.verificarItemTotal()
});

When(/^verificar os valores item, taxa e total na final$/, () => {
	overviewPage.verificarCalcular()
});

Then(/^clicar no botao 'Finish'$/, () => {
	overviewPage.overviewFinish()
	overviewPage.message()
});
