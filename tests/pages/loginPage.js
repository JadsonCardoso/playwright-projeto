const { expect } = require('@playwright/test')

export class LoginPage {

    constructor(page) {
        this.page = page
    }

async acessarLogin() {
    await this.page.goto('https://automationpratice.com.br/login');
    await expect(this.page.locator('#btnLogin')).toHaveText('login')
}

async preencherCampos(email, senha) {
    await this.page.locator('#user').fill(email)
    await this.page.locator('#password').fill(senha)
}

async clicarBotaoLogin() {
    await this.page.locator('#btnLogin').click()
}

async validarError(mensagemError) {
    await expect(this.page.locator('//span[@class="invalid_input"]')).toHaveText(mensagemError)
}

// Criar funções para logout
}
