// tests/ui/ui-tests.spec.js
const { test, expect } = require('@playwright/test');
const { SauceDemoPage } = require("./pages/saucedemoPage");
const { SauceDemoAssertions } = require("./assertions/saucedemoAssertions");
const { LoginGenerator } = require("./data/loginGenerator");
const { allure } = require('allure-playwright');

test.describe('UI Автоматизация - SauceDemo', () => {
    
    let saucedemoPage;
    let assertions;
    
    test.beforeEach(async ({ page }) => {
        saucedemoPage = new SauceDemoPage(page);
        assertions = new SauceDemoAssertions(page);
        await saucedemoPage.goto();
    });

    test('Тест 1: Успешный вход с валидными данными', async ({ page }) => {
        allure.owner('Automation Engineer');
        allure.severity('critical');
        allure.feature('Authentication');
        allure.story('User Login');
        
        const credentials = LoginGenerator.generateValidCredentials();
        
        // Делаем скриншот до действия
        await allure.attachment('Before Login', await page.screenshot(), 'image/png');
        
        await saucedemoPage.login(credentials.username, credentials.password);
        await assertions.assertLoginSuccess();
        
        // Делаем скриншот после действия
        await allure.attachment('After Login', await page.screenshot(), 'image/png');
        
        console.log('✅ Тест 1 пройден!');
    });

    test('Тест 2: Вход с невалидными данными', async ({ page }) => {
        allure.owner('Automation Engineer');
        allure.severity('normal');
        allure.feature('Authentication');
        allure.story('Failed Login');
        
        const credentials = LoginGenerator.generateInvalidCredentials();
        
        await saucedemoPage.login(credentials.username, credentials.password);
        await assertions.assertLoginFailed('Username and password do not match');
        
        // Скриншот ошибки
        await allure.attachment('Error Message', await page.screenshot(), 'image/png');
        
        console.log('✅ Тест 2 пройден!');
    });

    test('Тест 3: Добавление товара в корзину', async ({ page }) => {
        allure.owner('Automation Engineer');
        allure.severity('critical');
        allure.feature('Cart');
        allure.story('Add Item to Cart');
        
        const credentials = LoginGenerator.generateValidCredentials();
        await saucedemoPage.login(credentials.username, credentials.password);
        
        await saucedemoPage.addFirstItemToCart();
        await assertions.assertItemAddedToCart(1);
        
        // Скриншот корзины
        await saucedemoPage.goToCart();
        await allure.attachment('Cart Page', await page.screenshot(), 'image/png');
        
        console.log('✅ Тест 3 пройден!');
    });

    test('Тест 4: Проверка количества товаров', async ({ page }) => {
        const credentials = LoginGenerator.generateValidCredentials();
        await saucedemoPage.login(credentials.username, credentials.password);
        await assertions.assertInventoryItemCount(6);
        
        // Скриншот страницы с товарами
        await allure.attachment('Inventory Page', await page.screenshot(), 'image/png');
        
        console.log('✅ Тест 4 пройден!');
    });

    test('Тест 5: Выход из системы', async ({ page }) => {
        const credentials = LoginGenerator.generateValidCredentials();
        await saucedemoPage.login(credentials.username, credentials.password);
        
        await saucedemoPage.logout();
        await assertions.assertOnLoginPage();
        
        await allure.attachment('Logout Success', await page.screenshot(), 'image/png');
        
        console.log('✅ Тест 5 пройден!');
    });
});