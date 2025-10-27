const { test, expect } = require('../support')

test ('Deve efetuar o Login com sucesso', async ({ page }) =>{
     await page.login.visit()
     await page.login.submit('standard_user', 'secret_sauce')
     await page.login.LoginSucesso()
})

test ('Não deve efetuar o Login devido a (senha esta incorreta)', async ({ page }) =>{
     await page.login.visit()
     await page.login.submit('standard_user', 'teste123')
     
     const mensagem = 'Epic sadface: Username and password do not match any user in this service'
     await page.login.alertHaveText(mensagem)
})

test ('Não deve efetuar o Login devido ao (usuario esta incorreta)', async ({ page }) =>{
     await page.login.visit()
     await page.login.submit('teste123', 'secret_sauce')
     
     const mensagem = 'Epic sadface: Username and password do not match any user in this service'
     await page.login.alertHaveText(mensagem)
})

test ('Não deve efetuar o Login devido (não ter indicado usuario)', async ({ page }) =>{
     await page.login.visit()
     await page.login.submit('', 'secret_sauce')
     
     const mensagem = 'Epic sadface: Username is required'
     await page.login.alertHaveText(mensagem)
})

test ('Não deve efetuar o Login devido (não ter indicado a senha)', async ({ page }) =>{
     await page.login.visit()
     await page.login.submit('standard_user', '')
     
     const mensagem = 'Epic sadface: Password is required'
     await page.login.alertHaveText(mensagem)
})

test ('Não deve efetuar o Login devido (não ter indicado usuario e senha)', async ({ page }) =>{
     await page.login.visit()
     await page.login.submit('', '')
     
     const mensagem = 'Epic sadface: Username is required'
     await page.login.alertHaveText(mensagem)
})

test ('Não deve efetuar o Login devido ( usuario esta bloqueado)', async ({ page }) =>{
     await page.login.visit()
     await page.login.submit('locked_out_user', 'secret_sauce')
     
     const mensagem = 'Epic sadface: Sorry, this user has been locked out.'
     await page.login.alertHaveText(mensagem)
})



