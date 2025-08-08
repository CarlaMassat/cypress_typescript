
class ProductPage {
    private addToBasket() : Cypress.Chainable{return cy.get('.button.button.single_add_to_cart_button');}
    private descriptionTab() : Cypress.Chainable{return cy.get('.description_tab');}
    private description() : Cypress.Chainable{return cy.get('#tab-description');}
    private reviewTab() : Cypress.Chainable{return cy.get('.reviews_tab');}
    private review() : Cypress.Chainable{return cy.get('#reviews');}
  
    getReviewCount() : Cypress.Chainable {
        return this.reviewTab().invoke('text');
    }

    getAddToBasket() : Cypress.Chainable {
        return this.addToBasket();
    }

    getDescriptionTab() : Cypress.Chainable {
        return this.descriptionTab();
    }

    getDescription() : Cypress.Chainable {
        return this.description();
    }

    getReviewTab() : Cypress.Chainable {
        return this.reviewTab();
    }

    getReview() : Cypress.Chainable {
        return this.review();
    }
  

}

export const productPage = new ProductPage();