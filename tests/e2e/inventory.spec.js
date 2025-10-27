const { test, expect } = require('../support')

test.beforeEach(async ({ page }) => {
    await page.login.visit()
    await page.login.submit('standard_user', 'secret_sauce')
    await page.login.LoginSucesso()
})

test('Deve adicionar itens do carrinho', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket')
    const quantidadeAtual = await page.carrinho.quantidadeCarrinhoAtual();
    expect(quantidadeAtual).toBe(4)
})

test('Deve remover itens do carrinho por fora', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket')
    await page.carrinho.removerItem('sauce-labs-backpack', 'sauce-labs-bike-light')
    const quantidadeAtual = await page.carrinho.quantidadeCarrinhoAtual();
    expect(quantidadeAtual).toBe(2)

})


test('Valida a quantidade que sobrou na sacolinha por fora do carrinho', async ({ page }) => {
    await page.invent.adicionarAoCarrinho('sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket')
    await page.carrinho.quantidadeEsperada('4')
    await page.carrinho.removerItem('sauce-labs-backpack', 'sauce-labs-bike-light')
    const quantidadeAtual = await page.carrinho.quantidadeCarrinhoAtual();
    expect(quantidadeAtual).toBe(2)

})


