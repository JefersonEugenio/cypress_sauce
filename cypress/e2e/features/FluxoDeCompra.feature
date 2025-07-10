Feature: Fluxo de compra

    Scenario: Compra com sucesso
        Given que estou na página inicial da aplicação e estou autenticado com email e senha válidos, tenho acesso ao "Swag Labs"
        When adiciono um produto "Sauce Labs Backpack" ao carrinho e acesso o carrinho
        And inicio o processo de checkout e preencho as informações do comprador
        Then finalizo a compra com sucesso e mensagem "Thank you for your order!"