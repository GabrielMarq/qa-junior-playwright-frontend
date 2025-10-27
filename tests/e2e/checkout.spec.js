const { test, expect } = require('../support')

test.beforeEach(async ({ page }) => {
    await page.login.visit()
    await page.login.submit('standard_user', 'secret_sauce')
    await page.login.LoginSucesso()
})


test('Deve preencher dados do Checkout', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket')
    await page.invent.acessarCarrinho()
    await page.carrinho.quantidadeEsperada('4')
    await page.carrinho.clicarCheckout()
    await page.carrinho.checkoutIniciado()
    await page.checkout.submitCheckout('Gabriel', 'Marques', '30411-120')
})

test('Deve verificar se esta na pagina correta, e finalizar a venda', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket')
    await page.invent.acessarCarrinho()
    await page.carrinho.quantidadeEsperada('4')
    await page.carrinho.clicarCheckout()
    await page.carrinho.checkoutIniciado()
    await page.checkout.submitCheckout('Gabriel', 'Marques', '30411-120')
    await page.checkout.validarPagina('Checkout: Overview')
    await page.checkout.finalizarVenda()
})

test('Validar mensagem apos a finalização do pedido: Thank you for your order! ', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket')
    await page.invent.acessarCarrinho()
    await page.carrinho.quantidadeEsperada('4')
    await page.carrinho.clicarCheckout()
    await page.carrinho.checkoutIniciado()
    await page.checkout.submitCheckout('Gabriel', 'Marques', '30411-120')
    await page.checkout.validarPagina('Checkout: Overview')
    await page.checkout.finalizarVenda()
    await page.checkout.validarMensagem('Thank you for your order!')
})



