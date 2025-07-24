Feature: Acessar cada opção do menu funciona corretamente

    Background:
        Given que acesso a tela de login, preencho os dados e clico no botão Login

    Scenario: Navegar para tela principal pelo menu
        When acessar um produto "Sauce Labs Onesie"
        And clicar no simbolo de tres linhas
        Then clicar em 'All Items'

    Scenario: Acessar site Sauce Labs pelo menu
        When clicar no simbolo de tres linhas
        Then clicar em 'About'

    Scenario: Logout pelo menu
        When clicar no simbolo de tres linhas
        Then clicar em 'Logout'

    Scenario: Fechar menu lateral pelo botao 'X'
        When clicar no simbolo de tres linhas
        Then clicar em 'X'