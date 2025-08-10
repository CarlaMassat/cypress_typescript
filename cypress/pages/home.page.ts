
class HomePage {
    private menuShopLink(): Cypress.Chainable {return cy.get('#menu-item-40');}
    private menuMyAccountLink(): Cypress.Chainable{return cy.get('#menu-item-50');}
    private menuTestCasesLink(): Cypress.Chainable{return cy.get('#menu-item-224');}
    private menuAtSitesLink(): Cypress.Chainable{return cy.get('#menu-item-244');}
    private menuDemoSitesLink(): Cypress.Chainable{return cy.get('#menu-item-251');}
    private menuCartLink(): Cypress.Chainable{return cy.get('#wpmenucartli');}
    private slideMenu() : Cypress.Chainable{return cy.get('.n2-ss-slider-3');}
    private slideMenuBtnNext() : Cypress.Chainable{return cy.get('#n2-ss-6-arrow-next');}
    private slideMenuBtnPrev() : Cypress.Chainable{return cy.get('#n2-ss-6-arrow-previous');}
    private newArrivalsSection() : Cypress.Chainable{return cy.get('.sub_row_1-0-2');}

   
    clickShopMenu() : void {
        this.menuShopLink().click();
    }

    clickMyAccountMenu() : void {
        this.menuMyAccountLink().click();
    }

    getAllSlides() : Cypress.Chainable {
        return this.slideMenu().find('>div');
    }

    getNewArrivals() : Cypress.Chainable {
        return this.newArrivalsSection().find('>div');
    }

    getOneImageInArrivals(index: number) : Cypress.Chainable {
        const n = index + 1
       if (n > 0 && n < 4) {
        return this.newArrivalsSection().find(`>div:nth-child(${n})`);
       } 
       else{
        throw new Error('The value is incorrect');
       }
    }

   
     getMenuCartLink() : Cypress.Chainable {
        return this.menuCartLink().find('a > span.cartcontents');
    }

     getMenuCartAmountLink() : Cypress.Chainable {
        return this.menuCartLink().find('a > span.amount');
    }

    getPriceAmount(productElement: JQuery<HTMLElement>) : string {
        const discounted = productElement
        .find('ins .woocommerce-Price-amount');
         if (discounted.length > 0) {
            return discounted.text().trim();
         }
         else {
            const normalPrice = productElement
            .find('.woocommerce-Price-amount');
            return normalPrice.text().trim();
         }      
    }

}

export const homePage = new HomePage();