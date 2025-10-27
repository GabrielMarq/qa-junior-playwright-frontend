const { expect } = require('@playwright/test')
export class InventPage {
    constructor(page) {
        this.page = page
    }

    async adicionarAoCarrinho(...produtos) {
        for (const produto of produtos) {
            const adicionar = this.page.locator(`[data-test="add-to-cart-${produto}"]`)
            await adicionar.waitFor({ state: 'visible', timeout: 5000 })
            await adicionar.click()
        }
    }

    async acessarCarrinho() {
        const carrinho = this.page.locator('[data-test="shopping-cart-link"]')
        await carrinho.waitFor({ state: 'visible', timeout: 5000 })
        await carrinho.click();
    }
}
