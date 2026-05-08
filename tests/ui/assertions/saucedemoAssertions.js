// tests/ui/assertions/saucedemoAssertions.js
// Кастомные проверки (ассерты) для SauceDemo

const { expect } = require('@playwright/test');

class SauceDemoAssertions {
    constructor(page) {
        this.page = page;
    }

    // Проверка: вход успешен (перешли на страницу с товарами)
    async assertLoginSuccess() {
        // URL должен содержать inventory.html
        await expect(this.page).toHaveURL(/.*inventory.html/);
        
        // Список товаров должен быть виден
        const inventoryList = this.page.locator('.inventory_list');
        await expect(inventoryList).toBeVisible();
        
        console.log('  ✓ Вход выполнен успешно');
    }

    // Проверка: вход не удался (есть сообщение об ошибке)
    async assertLoginFailed(expectedErrorMessage) {
        const errorMessage = this.page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        
        const errorText = await errorMessage.textContent();
        expect(errorText).toContain(expectedErrorMessage);
        
        console.log(`  ✓ Ошибка входа: ${expectedErrorMessage}`);
    }

    // Проверка: товар добавлен в корзину
    async assertItemAddedToCart(expectedCount) {
        const cartBadge = this.page.locator('.shopping_cart_badge');
        
        if (expectedCount > 0) {
            await expect(cartBadge).toBeVisible();
            const countText = await cartBadge.textContent();
            expect(parseInt(countText, 10)).toBe(expectedCount);
            console.log(`  ✓ В корзине ${expectedCount} товар(ов)`);
        } else {
            await expect(cartBadge).toBeHidden();
            console.log('  ✓ Корзина пуста');
        }
    }

    // Проверка: количество товаров на странице
    async assertInventoryItemCount(expectedCount) {
        const items = this.page.locator('.inventory_item');
        const actualCount = await items.count();
        expect(actualCount).toBe(expectedCount);
        console.log(`  ✓ На странице ${actualCount} товаров`);
    }

    // Проверка: мы на странице корзины
    async assertOnCartPage() {
        await expect(this.page).toHaveURL(/.*cart.html/);
        console.log('  ✓ На странице корзины');
    }

    // Проверка: мы на странице логина
    async assertOnLoginPage() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
        console.log('  ✓ На странице логина');
    }
}

module.exports = { SauceDemoAssertions };