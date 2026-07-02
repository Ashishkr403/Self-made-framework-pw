
class order {

    constructor(page) {
        this.page = page;
        
        // locators
        this.inventoryTitle = page.locator('[data-test="inventory-list"]');
    }
    showInventoryTitle() {
        return this.inventoryTitle;
    }

}

module.exports = order;