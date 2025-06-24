// @ts-check - spech
import { test, expect } from '@playwright/test' // Importando o modulo '@playwright/test' e expect, e passando para a função 'test'
import { LoginPage } from '../pages/loginPage.js'
import { MinhaContaPage } from '../pages/MinhaContaPage.js'
import { faker } from '@faker-js/faker'

let loginPage
let minhaContaPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    minhaContaPage = new MinhaContaPage(page)
})

test('Acessar Aplicação', async ({ page }) => {
    await loginPage.acessarLogin()
})

test('Login válido', async ({ page }) => {
    const userEmail = faker.internet.email(); // Email Aleatório

    await loginPage.acessarLogin()

    await loginPage.preencherCampos(userEmail, '123654')
    await loginPage.clicarBotaoLogin()

    await minhaContaPage.validarSucesso('Login realizado', `Olá, ${userEmail}`)

    await page.waitForTimeout(5000)
})

test('Login sem preencher campos', async ({ page }) => {
    await loginPage.acessarLogin()

    await loginPage.preencherCampos('', '')
    await loginPage.clicarBotaoLogin()

    await loginPage.validarError('E-mail inválido.')

    await page.waitForTimeout(5000)
})

test('Login sem preencher campo Email', async ({ page }) => {
    await loginPage.acessarLogin()

    await loginPage.preencherCampos('', '123456')
    await loginPage.clicarBotaoLogin()

    await loginPage.validarError('E-mail inválido.')

    await page.waitForTimeout(5000)
})

test('Login sem preencher campo Senha', async ({ page }) => {
    await loginPage.acessarLogin()

    await loginPage.preencherCampos('testes123@teste.com', '')
    await loginPage.clicarBotaoLogin()

    await loginPage.validarError('Senha inválida.')

    await page.waitForTimeout(5000)
})

// Criar funções para logout