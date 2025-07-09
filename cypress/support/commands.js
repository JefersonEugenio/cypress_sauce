import LoginPage from "../e2e/pages/Login_page"

const loginPage = new LoginPage()

Cypress.Commands.add('acessarLogin', title => {
  const user = Cypress.env('user_name')
  const password = Cypress.env('user_password')

  loginPage.acessarNavegador()
  loginPage.fillLogin(user, password)
  loginPage.clickButton()
  loginPage.validar(title)
  
})
