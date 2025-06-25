import { test as base, expect } from '@playwright/test'

// Importando os arquivos das pages
import { LoginPage } from '../pages/loginPage.js'
import { MinhaContaPage } from '../pages/MinhaContaPage.js'
import { EnderecoPage } from '../pages/EnderecoPage.js'
import { CadastroPage } from '../pages/CadastroPage.js'
// import { ComponentsPage } from '../pages/Components.js'

const test = base.extend({ 
    page: async ({ page }, use) => { 
        const context = page 
        // @ts-ignore
        context['cadastro'] = new CadastroPage(page)
        // @ts-ignore
        context['login'] = new LoginPage(page)
        // @ts-ignore
        context['minhaConta'] = new MinhaContaPage(page)
        // @ts-ignore
        context['endereco'] = new EnderecoPage(page)
        // context['components'] = new ComponentsPage(page)

        await use(context)
    }
  }) 

  export { test, expect } 