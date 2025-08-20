/// <reference types="cypress" />

import OverviewPage from "../pages/Overview_page";

const overviewPage = new OverviewPage

describe('A pagina do overview', () => { 

    beforeEach(() => {
        const title = 'Swag Labs'
        cy.acessarLogin(title)
        cy.selecionadoProduto()
        cy.preencherInformacao()
    })

    it('Finalizar compra com produto no carrinho', () => {
        overviewPage.verificarProduto()
        overviewPage.verificarItemTotal()
        overviewPage.verificarCalcular()
        overviewPage.overviewFinish()
        overviewPage.message()
        overviewPage.backHome()
    })
})