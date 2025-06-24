import { test, expect } from '@playwright/test' // Importando o modulo '@playwright/test' e expect, e passando para a função 'test'
import { EnderecoPage } from '../pages/EnderecoPage.js'
import data from '../support/fixtures/endereco.json' assert { type: 'json' } // Importanto arquivo JSON: Projeto usando ES Modules
import { LoginPage } from '../pages/loginPage.js'
import { MinhaContaPage } from '../pages/MinhaContaPage.js'
import { faker } from '@faker-js/faker'

let loginPage
let minhaContaPage
let enderecoPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    minhaContaPage = new MinhaContaPage(page)
    enderecoPage = new EnderecoPage(page)
})

test('Cadastrar de endereço', async ({ page }) => {

    // Logando a aplicação
    const userEmail = faker.internet.email(); // Email Aleatório
    const endereco = data.dados // Criando CONSTANTE para receber os dados

    await loginPage.acessarLogin()

    await loginPage.preencherCampos(userEmail, '123654')
    await loginPage.clicarBotaoLogin()

    await minhaContaPage.validarSucesso('Login realizado', `Olá, ${userEmail}`)
    await minhaContaPage.clicarEmOk()

    // Acessando tela de cadastro de Enderaço
    await minhaContaPage.acessarCadastroEndereco()

    // Cadastro
    await enderecoPage.cadastrarEndereco(endereco.primeiro_nome, endereco.sobrenome, endereco.nome_da_empresa, endereco.email, endereco.pais, endereco.estado_cidade, endereco.cep, endereco.endereco_completo, endereco.notas_adicionais)
    await enderecoPage.validarSucesso()
    await page.waitForTimeout(5000)


})