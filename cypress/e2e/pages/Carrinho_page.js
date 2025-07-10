/// <reference types="cypress" />

import CarrinhoElement from "../elements/Carrinho_element";

const carrinhoElement = new CarrinhoElement

class CarrinhoPage {

    checkout() {
        cy.get(carrinhoElement.checkout())
            .should('be.visible')
            .click()
    }

} export default CarrinhoPage