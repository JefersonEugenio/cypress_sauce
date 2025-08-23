import LoginPage from '../e2e/pages/Login_page'
import ProdutoPage from '../e2e/pages/Produto_page'
import CarrinhoPage from '../e2e/pages/Carrinho_page'
import CheckoutPage from '../e2e/pages/Checkout_page'
import OverviewPage from '../e2e/pages/Overview_page'

const loginPage = new LoginPage()
const produtoPage = new ProdutoPage()
const carrinhoPage = new CarrinhoPage()
const checkoutPage = new CheckoutPage()
const overviewPage = new OverviewPage()

class Funcao {

    static fazLogin(user, password) {
        loginPage.fillLogin(user, password)
        loginPage.clickButton()
    }

    static selecionadoProduto(item) {
        produtoPage.validarProdutos()
        produtoPage.adicionarProduto(item)
        produtoPage.verificarIconeCarrinhoValor(1)
        produtoPage.acessarCarrinho()
        carrinhoPage.checkout()
    }

    static preencherInformacao() {
        checkoutPage.preencherDados()
        checkoutPage.continue()
    }

    static finalizadoProduto() {
        overviewPage.verificarProduto()
        overviewPage.verificarItemTotal()
        overviewPage.verificarCalcular()
        overviewPage.overviewFinish()
        overviewPage.message()
        overviewPage.backHome()
    }

} export default Funcao