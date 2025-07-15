Feature: A pagina do produto

    Background:
        Given que acesso a tela de login, preencho os dados e clico no botão Login
    
    Scenario: exibir lista de produtos após Login
        When visualizar a pagina de produtos
        Then os produtos devem estar visieis na pagina

    Scenario: adicionar produto ao carrinho
        When clicar no botao 'Add to cart' um produto de "Sauce Labs Bike Light"
        Then verificar se o icone do carrinho "1"

    Scenario: remover produto do carrinho
        When clicar no botao 'Add to cart' um produto de "Sauce Labs Bike Light"
        And clicar no botao 'Remove' um produto de "Sauce Labs Bike Light"
        Then verificar se o icone do carrinho ""

    Scenario: verificar ordenacao correta de produto pelo menu
        When visualizar existe menu de ordenacao
        Then seleciona a opcao "Name (Z to A)"
        And seleciona a opcao "Price (low to high)"
        And seleciona a opcao "Price (high to low)"