/// <reference types="cypress" />
import ProdutoPage from "../pages/Produto_page";
import CarrinhoPage from "../pages/Carrinho_page";

const produtoPage = new ProdutoPage
const carrinhoPage = new CarrinhoPage

describe('A pagina do carrinho', () => {

    beforeEach(() => {
        const title = 'Swag Labs'
        cy.acessarLogin(title)
        produtoPage.titleProduto('Products')
        produtoPage.validarProdutos()
        produtoPage.adicionarProduto('Sauce Labs Backpack')
        produtoPage.verificarIconeCarrinhoValor(1)
        produtoPage.acessarCarrinho()
    })

    it('Remover produto do carrinho', () => {
        carrinhoPage.removeBotao('Remove')
    })

    it('Continuar comprando pelo carrinho', () => {
        carrinhoPage.continueShopping()
    })

    it('Ir para checkout pelo carrinho', () => {
        carrinhoPage.checkout()
    })
})