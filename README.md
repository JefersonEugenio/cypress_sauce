# Sauce Demo Cypress com Cucumber

## 📌 Descrição do projeto
O objetivo deste projeto é criar uma automação completa de testes para o site [Sauce Demo](https://www.saucedemo.com/). O foco é identificar cenários de teste, implementá-los e configurar relatórios detalhados de execução, aplicando boas práticas de automação.

## 🔍 Sobre o projeto

A automação cobre funcionalidades críticas do site, garantindo a confiabilidade da aplicação e proporcionando facilidade na detecção de falhas. Entre os cenários contemplados estão:

- Login de usuários  
- Navegação no catálogo de produtos  
- Adição de itens ao carrinho  
- Finalização de compras  

---

# ✅ Pré-requisitos

Há sistemas que precisam estar instalados e conhecimentos prévios necessários, os quais são listados abaixo.

## 💻 Sistemas

Antes de começar, certifique-se de que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (`2.50.0` no momento da redação deste artigo)
- [Node.js](https://nodejs.org/en/) (`v22.17.0` no momento da redação deste artigo)
- npm (`10.9.2` no momento da redação deste artigo)
- [Visual Studio Code](https://code.visualstudio.com/) (`v1.101.2` no momento da redação deste artigo) ou alguma outra IDE de sua preferência

> **Obs.:** Recomendo usar as mesmas versões ou versões mais recentes de suporte de longo prazo (LTS) dos sistemas listados acima.
>
> **Obs. 2:** Ao instalar o Node.js, o npm é instalado junto.
>
> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` em seu terminal de linha de comando.
>
> **Obs. 4:** Deixei links para os instaladores na lista de requisitos acima, caso você ainda não os tenha instalados.

## 🚀 Como executar

### Passo a passo

#### 🔧 Opções para executar os testes:

1. **Clone o repositório:**
```bash
git clone https://github.com/JefersonEugenio/cypress_sauce.git
cd cypress_sauce
```

2. **Instale as dependências:**
```bash 
npm install 
```
3. **Configure o arquivo de ambiente (cypress.env.json):**
O projeto usa variáveis sensíveis (como login e senha) no arquivo cypress.env.json, que não é enviado para o GitHub por segurança.

Você precisa criar esse arquivo manualmente antes de executar os testes:

1.Copie o arquivo de exemplo:
``` cp cypress.env.example.json cypress.env.json ```
Ou crie um novo arquivo ''cypress.env.json'' na raiz do projeto.

2.Preencha com seus dados reais, seguindo o modelo:

```bash
{
  "user_name": "SEU_USUARIO",
  "user_password": "SUA_SENHA"
} 
```

### Comandos para executar os testes:
O comando ``npm run cypress:run`` é padrão para executar o fluxo de testes, mas é possível especificar uma classe de teste específica.
| Nome de classe | Comando | Descrição |
| :------- | :---- | :---------- |
| Cypress (headless) | ``npm run cypress:run`` | Executa todos os testes automaticamente no terminal (modo headless) |
| Cypress (GUI) | ``npm run cypress:open`` | Abre o Cypress no modo interativo com interface gráfica para depuração |


### Comandos para gerar o relatório Allure:
Após a execução dos testes, você pode gerar e abrir um relatório com os seguintes comandos:
| Nome | Comando | Descrição |
| :------- | :---- | :---------- |
| Gerar relatório | ``npx allure generate allure-results -o allure-report`` | Gera o relatório Allure a partir dos resultados dos testes |
| Abrir relatório | ``npx allure open allure-report`` | Abre o relatório Allure em uma interface gráfica no navegador |

## 👨‍💻 Autor
| [<img src="https://avatars.githubusercontent.com/u/122066021?v=4" width=115><br><sub>Jeferson Lopes Eugenio</sub>](https://github.com/JefersonEuenio) |
| :---: |