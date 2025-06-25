import { expect } from '@playwright/test'
/// Quando houver elemento com o mesmo HTML E CSS, coque nesse arquivo

export class ComponentsPage {

    constructor(page) {
        this.page = page
    }

    async validarMensagemError(texto) {
        await expect(this.page.locator('.errorLabel')).toHaveText(texto)
    }
}