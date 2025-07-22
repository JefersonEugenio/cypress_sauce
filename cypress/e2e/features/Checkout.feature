Feature: A pagina do checkout

    Background:
        Given que acesso a tela de login, preencho os dados e clico no botão Login
        And visualizar a pagina de produto e adicionar produto "Sauce Labs Bike Light"
        And verificar se há um produto listado na pagina do carrinho
        And clicar no botao "Checkout"

    Scenario Outline: "<cenario>"
        When eu inserir primeiro nome "<FirstName>", sobrenome "<LastName>" e CEP "<Postal>"
        Then clicar no botao Continue
        And sistema redireciona ou mensagem "<mensagem>"

        Examples:
        |cenario|FirstName|LastName|Postal|mensagem|
        |Preenchimento completo e valido dos campos obrigatorios|faker|faker|faker|Overview|
        |Campos obrigatorio em branco| | | |First Name is required|

    Scenario: Clicar em 'Cancel' para retornar ao carrinho
        When clicar no botao Cancel
        Then sistema redireciona ou mensagem "Your Cart"
        