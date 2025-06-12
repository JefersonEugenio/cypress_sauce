Feature: Acessar login

    Scenario Outline: "<cenario>"
        Given eu acesse a pagina home da aplicacao
        When eu inserir meu email "<email>" e minha senha "<senha>"
        And clicar no botao entrar
        Then tenho meu acesso "<mensagem>"

        Examples:
            | cenario           | email         | senha        | mensagem  |
            | Login com sucesso | standard_user | secret_sauce | Swag Labs |