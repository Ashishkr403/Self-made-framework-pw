//const {test, expect} = require('@playwright/test');
//const { LoginPage } = require('../pages/login.page');

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');

test('Login with valid credentials', async ({ page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    // Add assertions here
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Login with invalid credentials', async ({ page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_username', 'invalid_password');
    // Add assertions here
    await expect(page.locator('.error-message-container')).toBeVisible();
}); 