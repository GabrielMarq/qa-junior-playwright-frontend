const { test, expect } = require('../support')


test.beforeEach(async ({ page }) => {
    await page.login.visit()
    await page.login.submit('standard_user', 'secret_sauce')
    await page.login.LoginSucesso()
})

test('Deve remover itens do Carrinho e validar a quantidade antes e depois da remoção (Por dentro do carrinho)', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack','sauce-labs-bike-light','sauce-labs-bolt-t-shirt','sauce-labs-fleece-jacket')
    await page.invent.acessarCarrinho()
    await page.carrinho.quantidadeEsperada('4')
    await page.carrinho.removerItem('sauce-labs-backpack')
    const quantidadeAtual = await page.carrinho.quantidadeCarrinhoAtual();
    expect(quantidadeAtual).toBe(3)
})

test('Deve inciar o checkout', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack','sauce-labs-bike-light','sauce-labs-bolt-t-shirt','sauce-labs-fleece-jacket')
    await page.invent.acessarCarrinho()
    await page.carrinho.quantidadeEsperada('4')
    await page.carrinho.clicarCheckout()
    await page.carrinho.checkoutIniciado()
})