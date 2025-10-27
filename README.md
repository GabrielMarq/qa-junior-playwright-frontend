# Sauce Demo E2E Testing - Projeto de Testes Automatizados Frontend

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Analista de Qualidade Júnior**. Trata-se de uma suíte de testes automatizados end-to-end (E2E) implementada com Playwright, focada na aplicação web [Sauce Demo](https://www.saucedemo.com/).

O projeto demonstra minha capacidade de criar testes automatizados que cobrem os principais fluxos de uma aplicação de e-commerce, incluindo autenticação, navegação no catálogo, gerenciamento de carrinho e processo de checkout.

### Objetivo do Projeto
Demonstrar competências técnicas em automação de testes frontend através da implementação de:

- **Testes de Autenticação**: Validação de login com diferentes cenários (sucesso, falha, campos obrigatórios)
- **Testes de Funcionalidade**: Verificação do fluxo completo de compra online
- **Testes de Integração**: Validação da interação entre diferentes páginas e componentes
- **Boas Práticas**: Implementação do Page Object Pattern e organização de código

O objetivo é evidenciar conhecimento em ferramentas de automação, capacidade de análise de requisitos e implementação de testes robustos e manuteníveis.

---

## 🛠️ Tecnologias Utilizadas

- **Playwright**: Framework de testes end-to-end para web
- **JavaScript/Node.js**: Linguagem de programação
- **Page Object Pattern**: Padrão de design para organização dos testes
- **Sauce Demo**: Aplicação web de demonstração para testes

---

## 📁 Estrutura do Projeto

```
qa-junior-playwright-frontend/
├── tests/
│   ├── e2e/
│   │   ├── login.spec.js        # Testes de autenticação
│   │   ├── inventory.spec.js    # Testes do catálogo de produtos
│   │   ├── carro.spec.js        # Testes do carrinho de compras
│   │   └── checkout.spec.js     # Testes do processo de checkout
│   ├── pages/
│   │   ├── LoginPage.js         # Página de login
│   │   ├── InventPage.js        # Página do catálogo
│   │   ├── CarroPage.js         # Página do carrinho
│   │   └── CheckoutPage.js      # Página de checkout
│   └── support/
│       └── index.js             # Configuração e extensões do Playwright
├── playwright.config.js          # Configuração do Playwright
├── package.json                 # Dependências do projeto
└── README.md                    # Documentação do projeto
```

---

## 🚀 Configuração e Instalação

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm ou yarn
- Acesso à internet (para acessar o site Sauce Demo)

### Passos para instalação:

1. **Clone ou faça o download do projeto**

2. **Navegue até a pasta do projeto**
   ```bash
   cd qa-junior-playwright-frontend
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Instale os browsers do Playwright**
   ```bash
   npx playwright install
   ```

---

## ▶️ Como Executar os Testes

### Executar todos os testes
```bash
npx playwright test
```

### Executar testes de um arquivo específico
```bash
npx playwright test tests/e2e/login.spec.js
```

### Executar testes em modo headed (com interface gráfica)
```bash
npx playwright test --headed
```

### Executar testes com relatório HTML
```bash
npx playwright test
npx playwright show-report
```

### Executar testes em modo debug
```bash
npx playwright test --debug
```

### Executar testes em navegadores específicos
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=safari
```

---

## 🧪 Tipos de Testes Implementados

### 1. Testes de Login (`login.spec.js`)
- ✅ Login com credenciais válidas
- ✅ Validação de senha incorreta
- ✅ Validação de usuário incorreto
- ✅ Validação de campos obrigatórios (usuário vazio)
- ✅ Validação de campos obrigatórios (senha vazia)
- ✅ Validação de campos obrigatórios (ambos vazios)
- ✅ Validação de usuário bloqueado

### 2. Testes de Inventário (`inventory.spec.js`)
- ✅ Adicionar múltiplos itens ao carrinho
- ✅ Remover itens do carrinho (página externa)
- ✅ Validação de quantidade no carrinho

### 3. Testes de Carrinho (`carro.spec.js`)
- ✅ Remover itens do carrinho (página interna)
- ✅ Validação de quantidade antes e depois da remoção
- ✅ Iniciar processo de checkout

### 4. Testes de Checkout (`checkout.spec.js`)
- ✅ Preenchimento de dados do checkout
- ✅ Validação da página de overview
- ✅ Finalização da venda
- ✅ Validação da mensagem de confirmação

---

## 📊 Características dos Testes

### Boas Práticas Implementadas

1. **Page Object Pattern**: Organização do código usando classes para cada página
2. **Testes Isolados**: Cada teste é independente com setup adequado
3. **Validações Robustas**: Verificação de elementos visíveis e textos esperados
4. **Setup Automático**: Login automático antes de cada teste que requer autenticação
5. **Timeouts Configurados**: Aguardas adequadas para elementos carregarem
6. **Múltiplos Navegadores**: Suporte para Chrome, Firefox, Safari e dispositivos móveis

---

## 📝 Estrutura de um Teste Exemplo

```javascript
test('Deve efetuar o Login com sucesso', async ({ page }) => {
    await page.login.visit()
    await page.login.submit('standard_user', 'secret_sauce')
    await page.login.LoginSucesso()
})
```

### Exemplo de Page Object
```javascript
export class LoginPage {
    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async submit(login, senha) {
        await this.page.getByPlaceholder('Username').fill(login)
        await this.page.locator('#password').fill(senha)
        await this.page.locator('#login-button').click()
    }

    async LoginSucesso() {
        await expect(this.page).toHaveURL(/.*inventory/)
    }
}
```

---

## 🔧 Configuração do Playwright

O arquivo `playwright.config.js` contém as configurações principais:
- **Testes Paralelos**: Execução simultânea para maior velocidade
- **Múltiplos Navegadores**: Chrome, Firefox, Safari e dispositivos móveis
- **Retry Automático**: Tentativas automáticas em caso de falha (CI/CD)
- **Relatórios HTML**: Geração automática de relatórios detalhados
- **Trace Viewer**: Rastreamento de execução para debug

---

## 📚 Dependências Principais

```json
{
  "@playwright/test": "^1.56.1",
  "@types/node": "^24.9.1"
}
```

---

## 🎯 Cenários de Teste Cobertos

### Fluxo Completo de E-commerce
1. **Autenticação**: Login com diferentes tipos de usuários
2. **Navegação**: Acesso ao catálogo de produtos
3. **Seleção**: Adição de produtos ao carrinho
4. **Gerenciamento**: Remoção de itens do carrinho
5. **Checkout**: Preenchimento de dados pessoais
6. **Finalização**: Conclusão da compra e confirmação

### Tipos de Usuários Testados
- `standard_user`: Usuário padrão com acesso completo
- `locked_out_user`: Usuário bloqueado para testes de erro
- Credenciais inválidas para validação de segurança

---

**Desenvolvido para demonstrar conhecimento em automação de testes E2E** 🚀
