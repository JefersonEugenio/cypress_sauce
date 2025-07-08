Feature: Acessar login

    Scenario: Login com sucesso
        Given eu acesse a pagina home da aplicacao
        When eu inserir meu email e senha validos
        And clicar no botao entrar
        Then tenho meu acesso "Swag Labs"