// @ts-check - spech

import { test, expect } from '@playwright/test'  // Importando o modulo '@playwright/test' e expect, e passando para a função 'test'
import { CadastroPage } from '../pages/CadastroPage.js'
import { MinhaContaPage } from '../pages/MinhaContaPage.js'
import { faker } from '@faker-js/faker'

let cadastroPage
let minhaContaPage

const userName = faker.person.fullName(); // Nome aleatório
const userEmail = faker.internet.email(); // Email Aleatório

test.beforeEach(async ({ page }) => {
    cadastroPage = new CadastroPage(page)
    minhaContaPage = new MinhaContaPage(page)
})

test('Cadastro com sucesso', async ({ page }) => {
    await cadastroPage.acessarCadastro()
    await cadastroPage.submeterCadastro(userName, userEmail, '123456')
    await minhaContaPage.validarCadastroSucesso(userName)
    await page.waitForTimeout(5000)

})

test('Não deve cadastrar sem preencher o formulário', async ({ page }) => {
    await cadastroPage.acessarCadastro()
    await cadastroPage.submeterCadastro('', '', '')
    await cadastroPage.validarMensagemError('O campo nome deve ser prenchido')
    await page.waitForTimeout(5000)

})

test('Não deve cadastrar se os campos email e senha não forem preenchidos', async ({ page }) => {
    await cadastroPage.acessarCadastro()
    await cadastroPage.submeterCadastro(userName, '', '')
    await cadastroPage.validarMensagemError('O campo e-mail deve ser prenchido corretamente')
    await page.waitForTimeout(5000)

})

test('Não deve cadastrar se os campos nome e senha não forem preenchidos', async ({ page }) => {
    await cadastroPage.acessarCadastro()
    await cadastroPage.submeterCadastro('', userEmail, '')
    await cadastroPage.validarMensagemError('O campo nome deve ser prenchido')
    await page.waitForTimeout(5000)

})

test('Não deve cadastrar se o campo senha não for preenchido', async ({ page }) => {
    await cadastroPage.acessarCadastro()
    await cadastroPage.submeterCadastro(userName, userEmail, '')
    await cadastroPage.validarMensagemError('O campo senha deve ter pelo menos 6 dígitos')
    await page.waitForTimeout(5000)

})

test('Não deve cadastrar com email inválido', async ({ page }) => {
    await cadastroPage.acessarCadastro()
    await cadastroPage.submeterCadastro(userName, 'wwww.dddd', '123456')
    await cadastroPage.validarMensagemError('O campo e-mail deve ser prenchido corretamente')
    await page.waitForTimeout(5000)

})


test('Não deve cadastrar se senha for menor que 6 caracteres', async ({ page }) => {
    await cadastroPage.acessarCadastro()
    await cadastroPage.submeterCadastro(userName, userEmail, '123')
    await cadastroPage.validarMensagemError('O campo senha deve ter pelo menos 6 dígitos')
    await page.waitForTimeout(5000)
})
