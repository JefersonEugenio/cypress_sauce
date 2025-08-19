/// <reference types="cypress" />

import ProdutoPage from "../pages/Produto_page";

const produtoPage = new ProdutoPage

describe('A pagina do produto', () => {

    beforeEach(() => {
        const title = 'Swag Labs'
        cy.acessarLogin(title)
    })

    it('exibir lista de produtos após Login', () => {
        produtoPage.titleProduto('Products')
        produtoPage.validarProdutos()
    })

    it('adicionar produto ao carrinho', () => {
        produtoPage.adicionarProduto('Sauce Labs Backpack')
        produtoPage.verificarIconeCarrinhoValor(1)
    })
    
    it('remover produto do carrinho', () => {
        produtoPage.adicionarProduto('Sauce Labs Backpack')
        produtoPage.removerProduto('Sauce Labs Backpack')
        produtoPage.verificarIconeCarrinhoValor("")
    })

    it.only('verificar ordenacao correta de produto pelo menu', () => {
        produtoPage.verificarMenuOrdenacao()
        produtoPage.selecionarMenuOrdenacao('Name (Z to A)')
        produtoPage.selecionarMenuOrdenacao('Price (low to high)')
        produtoPage.selecionarMenuOrdenacao('Price (high to low)')
    })
})