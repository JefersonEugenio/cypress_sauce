import LoginPage from "../e2e/pages/Login_page"
import ProdutoPage from "../e2e/pages/Produto_page";
import CarrinhoPage from "../e2e/pages/Carrinho_page";
import CheckoutPage from "../e2e/pages/Checkout_page";
import OverviewPage from "../e2e/pages/Overview_page";


const loginPage = new LoginPage()
const produtoPage = new ProdutoPage()
const carrinhoPage = new CarrinhoPage()
const checkoutPage = new CheckoutPage()
const overviewPage = new OverviewPage()

Cypress.Commands.add('acessarLogin', title => {
  const user = Cypress.env('user_name')
  const password = Cypress.env('user_password')

  loginPage.acessarNavegador()
  loginPage.fillLogin(user, password)
  loginPage.clickButton()
  loginPage.validar(title)
})

Cypress.Commands.add('selecionadoProduto', () => {
  produtoPage.titleProduto('Products')
  produtoPage.validarProdutos()
  produtoPage.adicionarProduto('Sauce Labs Backpack')
  produtoPage.verificarIconeCarrinhoValor(1)
  produtoPage.acessarCarrinho()
  carrinhoPage.checkout()
})

Cypress.Commands.add('preencherInformacao', () => {
  checkoutPage.preencherDados()
  checkoutPage.continue()
})

Cypress.Commands.add('finalizadoProduto', () => {
  overviewPage.verificarProduto()
  overviewPage.verificarItemTotal()
  overviewPage.verificarCalcular()
  overviewPage.overviewFinish()
  overviewPage.message()
  overviewPage.backHome()
})
