// @ts-check - spech
import { test, expect } from '@playwright/test';
const {LoginPage} = require('./pages/loginPage')

test('Acessar Aplicação', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.acessarAplicação()
}) 