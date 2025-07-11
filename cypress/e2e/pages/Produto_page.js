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

    acessarCarrinho() {
        cy.get(produtoElement.quantidadeCarrinho())
            .should('have.text', 1)

        cy.get(produtoElement.carrinho())
            .should('be.visible')
            .click()
    }

    validarProdutos() {
        cy.get(produtoElement.produtos())
            .should('be.visible')
    }

} export default ProdutoPage