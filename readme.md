# Projeto de automação com Cypress  

![img](/midia/fluxo_cypress.gif)

__A automação contempla um fluxo básico de compra passando pelas etapas de__:  
* Login  
    * verificação da página
    * realização de login      
* página do produto
    * verificação da página
    * verificação dos botões para adicionar produtos
    * verificação dos botões com procutos adicionados
    * verificação do ícone de carrinho com e sem produto selecionado
* carrinho
    * verificação da página
    * verificação dos itens adicionados
    * verificação do ícone do carrinho
    * verificação dos botões
* finalização da compra
    * verificação da página
    * preenchimento do formulário
* compra finalizada
    * verificação das páginas
    * dos ítens adquiridos
    * mensagem de sucesso
***

### Como executar o projeto:

1. Clonar o projeto no repositório local:    
     * `git clone https://github.com/marinagiaquinto/cypress_fluxo_de_compra.git`
2. Para instalar as dependências do projeto executar pela linha de comando no diretório raíz do projeto:  
    * `npm i`
3. Para rodar o Cypress, executar no diretório raíz:
    * pela linha de comando: `npx cypress run`
    * pela interface gráfica: `npx cypress open`
