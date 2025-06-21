// @ts-check - spech
import { test, expect } from '@playwright/test';
import { log } from 'console';
const {LoginPage} = require('./pages/loginPage')

test('Acessar Aplicação', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.acessarAplicação()
}) 

test('Login válido', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.acessarAplicação()

    await loginPage.preencherCampos('testes123@teste.com', '123456')
    await loginPage.clicarBotaoLogin()

    await loginPage.validarSucesso('Login realizado', 'Olá, testes123@teste.com')

    await page.waitForTimeout(5000)
})

test('Login sem preencher campo Email', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.acessarAplicação()

    await loginPage.preencherCampos('', '123456')
    await loginPage.clicarBotaoLogin()
    
    await loginPage.validarError('E-mail inválido.')

    await page.waitForTimeout(5000)
})

test('Login sem preencher campo Senha', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.acessarAplicação()

    await loginPage.preencherCampos('testes123@teste.com', '')
    await loginPage.clicarBotaoLogin()
    
    await loginPage.validarError('Senha inválida.')

    await page.waitForTimeout(5000)
})