
class ProductPage {
    private addToBasket() : Cypress.Chainable{return cy.get('.button.add_to_cart_button')}

    getAddToBasket() : Cypress.Chainable {
        return this.addToBasket();

    }
}

export const productPage = new ProductPage();