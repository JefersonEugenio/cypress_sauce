/// <reference types="cypress" /> 

import ProdutoElement from "../elements/Produto_element";

const produtoElement = new ProdutoElement

class ProdutoPage {

    adicionarProduto(item) {
        cy.get(produtoElement.produtos())
            .contains(item)
            .should('be.visible')
            .parents('.inventory_item')
            .find('button')
            .click()
    }

    removerProduto(item) {
        cy.get(produtoElement.produtos())
            .contains(item)
            .should('be.visible')
            .parents('.inventory_item')
            .find('button')
            .click()
    }

    iconeCarrinho() {
        cy.get(produtoElement.quantidadeCarrinho())
            .should('have.text', 1)
    }

    acessarCarrinho() {
        cy.get(produtoElement.carrinho())
            .should('be.visible')
            .click()
    }

    validarProdutos() {
        cy.get(produtoElement.produtos())
            .should('be.visible')
    }

    titleProduto() {
        cy.get(produtoElement.titleProduto())
            .should('be.visible')
    }

    verificarIconeCarrinhoValor(valor) {
        if (valor > 0) {
            cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', String(valor));
        } else {
            cy.get('.shopping_cart_badge')
            .should('not.exist');
        }
    }

    verificarMenuOrdenacao() {
        cy.get(produtoElement.menuOrdenacao())
            .should('be.visible')
    }

    selecionarMenuOrdenacao(value) {
        cy.get(produtoElement.menuOrdenacao())
            .should('be.visible')
            .select(value)
    }

} export default ProdutoPage