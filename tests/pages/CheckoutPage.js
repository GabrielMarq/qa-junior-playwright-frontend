const { expect } = require('@playwright/test')

export class CheckoutPage {
    constructor(page) {
        this.page = page
    }

async submitCheckout(nome, sobreNome, zipCode) {
    await this.page.locator('#first-name').fill(nome)
    await this.page.locator('#last-name').fill(sobreNome)
    await this.page.locator('#postal-code').fill(zipCode)
    await this.page.locator('#continue').click()
}


async validarPagina() {
  const titulo = this.page.locator('[data-test="title"]');
  await expect(titulo).toBeVisible();
}

async finalizarVenda(){
    await this.page.locator('#finish').click()
}

async validarMensagem() {
  const mensagem = this.page.locator('[data-test="complete-header"]');
  await expect(mensagem).toBeVisible();
  await expect(mensagem).toHaveText('Thank you for your order!');  
}
}