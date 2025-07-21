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
        |Preenchimento completo e valido dos campos obrigatorios|jeferson|lopes|1590909|Overview|
        |Campos obrigatorio em branco| | | |First Name is required|
        |Insercao de caracteres invalidos nos campos de texto|@123|#$$%|abcde|First Name is required|