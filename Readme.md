![poster](https://github.com/JadsonCardoso/playwright-projeto)
# Projeto de Testes Automatizados com Playwright
Este projeto utiliza o [Playwright](https://playwright.dev/) para automação de testes end-to-end em aplicações web. Ele foi desenvolvido com o objetivo de garantir a qualidade e estabilidade da aplicação através de testes robustos, rápidos e confiáveis.

## Estrutura do Projeto

```
- e2e/                  # Casos de teste organizados por grupos funcionais
- actions/              # Actions (métodos reutilizáveis)
- index.js/             # Configurações (credenciais, visual, contextos)
- fixtures/             # JSON, Imagens, etc (para massa de testes)
- utils/                # Utilitários e helpers reutilizáveis
- playwright.config.ts  # Configurações globais do Playwright
```

## 💻 Tecnologias
- Node.js
- Playwright
- Javascript
- Faker
- PostgreSQL

## 🤖 Como executar

1. Clonar o repositório, instalar as dependências
```
npm install
```

2. Executar testes em Headless
```
npx playwright test 
```

3. Executar ver o relatório dos testes
```
npx playwright show-report
```