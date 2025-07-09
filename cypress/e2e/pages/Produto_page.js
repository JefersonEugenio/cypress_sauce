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
        cy.get(produtoElement.carrinho())
            .should('be.visible')
            .click()
    }

} export default ProdutoPage