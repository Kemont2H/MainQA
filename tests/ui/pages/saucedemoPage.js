// tests/ui/pages/saucedemoPage.js
// Page Object для SauceDemo - содержит все элементы и действия на странице

class SauceDemoPage {
    constructor(page) {
        this.page = page;
        
        // Локаторы элементов страницы (как найти элементы)
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.inventoryList = page.locator('.inventory_list');
        this.inventoryItems = page.locator('.inventory_item');
        this.cartLink = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    // Метод: открыть страницу логина
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.waitForLoadState('networkidle');
    }

    // Метод: выполнить вход
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    // Метод: добавить первый товар в корзину
    async addFirstItemToCart() {
        const addButton = this.page.locator('[data-test^="add-to-cart"]').first();
        await addButton.click();
        await this.page.waitForTimeout(500);
    }

    // Метод: добавить конкретный товар по названию
    async addItemToCartByName(itemName) {
        const addButton = this.page.locator(`[data-test="add-to-cart-${itemName}"]`);
        await addButton.click();
        await this.page.waitForTimeout(500);
    }

    // Метод: перейти в корзину
    async goToCart() {
        await this.cartLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    // Метод: выйти из системы
    async logout() {
        await this.menuButton.click();
        await this.page.waitForTimeout(500);
        await this.logoutLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    // Метод: получить количество товаров в корзине
    async getCartItemCount() {
        if (await this.cartBadge.isVisible()) {
            const countText = await this.cartBadge.textContent();
            return parseInt(countText, 10);
        }
        return 0;
    }

    // Метод: получить текст ошибки
    async getErrorMessage() {
        if (await this.errorMessage.isVisible()) {
            return await this.errorMessage.textContent();
        }
        return '';
    }
}

module.exports = { SauceDemoPage };