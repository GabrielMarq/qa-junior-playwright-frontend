const { expect } = require('@playwright/test')

export class LoginPage {
    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async submit(login,senha) {
        await this.page.getByPlaceholder('Username').fill(login)
        await this.page.locator('#password').fill(senha)
        await this.page.locator('#login-button').click()
    
    }

    async LoginSucesso(){
        //Como não consta uma mensagem de login com sucesso, fiz uma validação pela URL
        await expect(this.page).toHaveURL(/.*inventory/)
    }
    async alertHaveText(text){
        const alert = this.page.locator('[data-test="error"]')
        await expect(alert).toHaveText(text)
    }
}

