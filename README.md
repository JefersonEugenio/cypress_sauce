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
cd SauceCypress
Executar via terminal: "npm run cypress:run" ou "npm run cypress:open"
```

O comando ``npm run cypress:run`` é padrão para executar o fluxo de testes, mas é possível especificar uma classe de teste específica.
| Nome de classe | Comando | Descrição |
| :------- | :---- | :---------- |
| Cypress (headless) | ``npm run cypress:run`` | Executa todos os testes automaticamente no terminal (modo headless) |
| Cypress (GUI) | ``npm run cypress:open`` | Abre o Cypress no modo interativo com interface gráfica para depuração |

## 👨‍💻 Autor
| [<img src="https://avatars.githubusercontent.com/u/122066021?v=4" width=115><br><sub>Jeferson Lopes Eugenio</sub>](https://github.com/JefersonEuenio) |
| :---: |