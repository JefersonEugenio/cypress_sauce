/// <reference types="cypress" />

import CheckoutPage from "../pages/Checkout_page";

const checkoutPage = new CheckoutPage

describe('A pagina do carrinho', () => {
    
    beforeEach(() => {
        const title = 'Swag Labs'
        cy.acessarLogin(title)
        cy.selecionadoProduto()
    })

    it('Preenchimento completo e valido dos campos obrigatorios', () => {
        checkoutPage.preencherDados()
        checkoutPage.continue()
    })
    
    it('Campos obrigatorio em branco', () => {
        checkoutPage.continue()
        checkoutPage.error('Error: First Name is required')
    })
    
    it('Campo "First Name" em branco', () => {
        checkoutPage.preencherLastName()
        checkoutPage.preencherPostal()
        checkoutPage.continue()
        checkoutPage.error('Error: First Name is required')
    })

    it('Campo "Last Name" em branco', () => {
        checkoutPage.preencherFirstName()
        checkoutPage.preencherPostal()
        checkoutPage.continue()
        checkoutPage.error('Error: Last Name is required')
    })
    it('Campo "Zip/Postal" em branco', () => {
        checkoutPage.preencherFirstName()
        checkoutPage.preencherLastName()
        checkoutPage.continue()
        checkoutPage.error('Error: Postal Code is required')
    })
    it('Clicar em "Cancel" para retornar ao carrinho', () => {
        checkoutPage.cancel()
    })
})