
const { test } = require('@playwright/test');

test.setTimeout(60000);
test('Launch the sucedemo web link', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(2000);

    //Logs in with provided credentials. in Saucedemo
    await page.locator('xpath=//*[@id="user-name"]').fill('standard_user')
    await page.locator('xpath=//*[@id="password"]').fill('secret_sauce')
    await page.locator('xpath=//*[@id="login-button"]').click()
    await page.waitForTimeout(2000);

    //Sorts products by various filters. Z to A
    await page.locator('xpath=//*[@class="product_sort_container"]').selectOption({ value: "za" })
    await page.waitForTimeout(5000);

    //Sorts products by various filters. High to Low
    await page.locator('xpath=//*[@class="product_sort_container"]').selectOption({ value: "hilo" })
    await page.waitForTimeout(3000);


    //Adds multiple products to the cart.

    await page.locator('xpath=//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click()
    await page.locator('xpath=//*[@id="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('xpath=//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    await page.waitForTimeout(2000)

    //Completes the checkout process.
    await page.locator('xpath=//*[@class="shopping_cart_link"]').click()
    await page.waitForTimeout(3000)

    await page.locator('xpath=//*[@id="checkout"]').click()
    await page.waitForTimeout(2000)
    
    //Input Name and Postalcode:

    await page.locator('xpath=//*[@id="first-name"]').fill('Mr. John')
    await page.locator('xpath=//*[@id="last-name"]').fill('Picker')
    await page.locator('xpath=//*[@id="postal-code"]').fill('12345')
    await page.waitForTimeout(2000)

    await page.locator('xpath=//*[@id="continue"]').click()
    await page.waitForTimeout(2000)
    await page.locator('xpath=//*[@id="finish"]').click()
    await page.waitForTimeout(5000)


})
