
class ShopPage {
    private navigation(): Cypress.Chainable{return cy.get('.woocommerce-breadcrumb')}

    
    clickHome() : Cypress.Chainable {
        return this.navigation().find('a').click();
    }

}

export const shopPage = new ShopPage();