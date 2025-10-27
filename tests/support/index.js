const { test: base, expect } = require ('@playwright/test')

const  { LoginPage } = require('../pages/LoginPage')
const { InventPage } = require('../pages/InventPage')
const { CarroPage } = require ('../pages/CarroPage')
const { CheckoutPage } = require('../pages/CheckoutPage')

const test = base.extend({
    page: async ({ page }, use) =>{
        await use({
        ...page,
        login: new LoginPage(page),
        invent: new InventPage (page),
        carrinho: new CarroPage(page),
        checkout: new CheckoutPage(page)
        })
    }
})

export { test,expect}