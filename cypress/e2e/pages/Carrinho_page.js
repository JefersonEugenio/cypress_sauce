/// <reference types="cypress" />

import CarrinhoElement from "../elements/Carrinho_element";

const carrinhoElement = new CarrinhoElement

class CarrinhoPage {

    checkout() {
        cy.get(carrinhoElement.checkout())
            .should('be.visible')
            .click()
    }

    verificarProduto() {
        cy.get(carrinhoElement.produto())
            .should('be.visible')
    }

    removeBotao(remove) {
        cy.contains(carrinhoElement.remove(), remove)
            .should('be.visible')
            .click()
    }

    checkoutBotao(checkout) {
        cy.contains(carrinhoElement.checkout(), checkout)
        .should('be.visible')
        .click()
    }

    verificarQuantidadeCampo(numero) {
        cy.get(carrinhoElement.quantidade())
        .should('have.text', numero)
    }

    alterarQuantidadeCampo(numero) {
        cy.get(carrinhoElement.quantidade())
        .should('be.visible')
        .type(numero)
    }
    
} export default CarrinhoPage