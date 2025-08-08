/// <reference types="cypress" />

import {homePage} from "../pages/home.page"
import { shopPage } from "../pages/shop.page";
import { productPage } from "../pages/productPage";


describe("Home Page", function () {
  beforeEach(function () {
    cy.visit("/");
    homePage.clickShopMenu();
    shopPage.clickHome();

  });

  
  it("Home page with three sliders only", function () {
    homePage.getAllSlides().should('have.length',3);
  });


   it("Home page should three arrivals only", function () {
    homePage.getNewArrivals().should('have.length',3);
  });

   it("Images in arrivals should navigate", function () {
    const imageNumber = Math.floor(Math.random()* 3 ) + 1;
    homePage.getNewArrivals().should('have.length',3);
    homePage.getOneImageInArrivals(imageNumber).click();
    productPage.getAddToBasket().should('exist');
  });

  it("Arrivals-Images-Description", function () {
    const imageNumber = Math.floor(Math.random()* 3) + 1
    homePage.getNewArrivals().should('have.length', 3);
    homePage.getOneImageInArrivals(imageNumber).click();
    productPage.getAddToBasket().should('exist');
    productPage.getDescriptionTab().click();
    productPage.getDescription().should('be.visible');
  });

   it("Arrivals-Images-Reviews", function () {

    const imageNumber = Math.floor(Math.random()* 3) + 1
    homePage.getNewArrivals().should('have.length', 3);
    homePage.getOneImageInArrivals(imageNumber).click();
    productPage.getAddToBasket().should('exist');
    productPage.getReviewTab().click();
    productPage.getReviewCount().then((text) =>{
    const match = text.match(/\((\d+)\)/);
    const count = parseInt(match[1], 10);
    expect(count).to.equal(0);
    });
    productPage.getReview().should('be.visible');

  });

});