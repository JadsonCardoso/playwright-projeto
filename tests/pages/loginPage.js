import { test, expect } from '@playwright/test';
export class LoginPage {

    constructor(page) {
        this.page = page
    }
async acessarAplicação() {
    await this.page.goto('https://automationpratice.com.br/login');
    await expect(this.page.locator('#btnLogin')).toHaveText('login')
}
}
