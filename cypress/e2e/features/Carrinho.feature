Feature: A pagina do carrinho

    Background:
        Given que acesso a tela de login, preencho os dados e clico no botão Login
        And visualizar a pagina de produto e adicionar produto "Sauce Labs Bike Light"
        When verificar se há um produto listado na pagina do carrinho
    
    Scenario: Remover produto do carrinho
        Then clicar no botao "Remove"

    Scenario: Continuar comprando pelo carrinho
        Then clicar no botao "Continue Shopping"

    Scenario: Ir para checkout pelo carrinho
        Then clicar no botao "Checkout"