Feature: Acessar login

    Scenario: Login com sucesso
        Given eu acesse a pagina home da aplicacao
        When eu inserir meu email e senha validos
        And clicar no botao entrar
        Then tenho meu acesso "Swag Labs"

    Scenario: Login com usuario invalido
        Given eu acesse a pagina home da aplicacao
        When eu inserir meu email invalido e senha valido
        And clicar no botao entrar
        Then exibida mensagem de erro "Username and password do not match any user in this service"

    Scenario: Login com senha incorreta
        Given eu acesse a pagina home da aplicacao
        When eu inserir meu email e senha incorreta
        And clicar no botao entrar
        Then exibida mensagem de erro "Username and password do not match any user in this service"

    Scenario: Login com campos em branco
        Given eu acesse a pagina home da aplicacao
        When eu deixo os campos de email e senha em branco
        And clicar no botao entrar
        Then exibida mensagem de erro "Username is required"

    Scenario: Login a senha em branco
        Given eu acesse a pagina home da aplicacao
        When eu deixo o campo a senha em branco
        And clicar no botao entrar
        Then exibida mensagem de erro "Password is required"

    Scenario: Inserir quantidade ilimitada de caracteres no campo username
        Given eu acesse a pagina home da aplicacao
        When eu inserir "150" caracteres aleatorio no campo username
        And clicar no botao entrar
        Then exibida mensagem de erro indicando o limite de caracteres