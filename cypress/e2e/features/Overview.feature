Feature: A pagina do overview

    Background:
        Given que acesso a tela de login, preencho os dados e clico no botão Login
        And visualizar a pagina de produto e adicionar produto "Sauce Labs Onesie"
        And verificar se há um produto listado na pagina do carrinho
        And clicar no botao "Checkout"
        And eu inserir primeiro nome "faker", sobrenome "faker" e CEP "faker"
        And clicar no botao Continue
        And sistema redireciona ou mensagem "Overview"

    Scenario: Finalizar compra com produto no carrinho
        When verificar se tem produto na pagina do Overview
        And verificar valor do produto correto
        And verificar os valores item, taxa e total na final
        Then clicar no botao 'Finish'