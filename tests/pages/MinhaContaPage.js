import { expect } from '@playwright/test'

export class MinhaContaPage {
  constructor(page) {
    this.page = page
  }

  async validarCadastroSucesso(nome) {
    await this.page.waitForLoadState('networkidle')
    await expect(this.page.locator('#swal2-title')).toHaveText('Cadastro realizado!')
    await expect(this.page.locator('#swal2-html-container')).toHaveText(`Bem-vindo ${nome}`)
    await expect(this.page).toHaveURL(/.*my-account/)
  }

  async validarSucesso(mensagemSucesso, validarEmail) {
    await expect(this.page.locator('#swal2-title')).toHaveText(mensagemSucesso)
    await expect(this.page.locator('#swal2-html-container')).toHaveText(validarEmail)
  }

  async clicarEmOk() {
    await this.page.getByText('OK').click()
  }

  async acessarCadastroEndereco() {
    // Buscando elemento pelo escopo: caso fosse ID ficaria: #id .nomedaclasse
    await this.page.locator('.footer_one_widget > ul > li').getByText('Checkout View One').click()
  }
}