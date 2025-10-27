const { expect } = require('@playwright/test')
export class CarroPage {
    constructor(page) {
        this.page = page
        this.carrinho = page.locator('[data-test="shopping-cart-badge"]')
        this.checkout = page.locator('[data-test="checkout"]')
    }

    async removerItem(...produtos) {
        for (const produto of produtos) {
            const remove = this.page.locator(`[data-test="remove-${produto}"]`)
            await expect(remove).toBeVisible({ timeout: 5000 })
            await expect(remove).toBeEnabled({ timeout: 5000 })
            await remove.click()
        }
    }

    async quantidadeEsperada(quantidadeEsperada) {
        await expect(this.carrinho).toHaveText(String(quantidadeEsperada))
    }

    async quantidadeCarrinhoAtual() {
        const texto = await this.carrinho.textContent()
        return Number(texto)
    }

    async clicarCheckout() {
        await this.checkout.waitFor({ state: 'visible', timeout: 5000 })
        await this.checkout.click()
    }
    async checkoutIniciado() {

        await expect(this.page).toHaveURL(/.*checkout/)

    }

}
