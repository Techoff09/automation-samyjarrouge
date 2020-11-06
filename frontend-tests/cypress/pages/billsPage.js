/// <reference types="cypress" />

const { billsDashInfo2, dashboardPageAssert } = require("../targets/targets")

// Elements: Bills

const billsBlock = '.blocks > :nth-child(3)'
const billsViewButton = ':nth-child(3) > .btn' 
const billsPageName = 'h2 > div'
const createBillButton = 'a.btn.blue'
const createBillBackButton = 'a.btn:nth-child(1)'
//const billsBackButton = ':nth-child(3) > .btn'

// Actions / Functions

function confirmBillsPage (cy, billsDashInfo1, billsDashInfo2, cat3, bills_url, newBill_url){
    cy.get(billsBlock).contains(billsDashInfo1)
    cy.contains(billsDashInfo2)
    cy.get(billsViewButton).click()
    cy.get(billsPageName).should('contain', cat3)
    cy.url().should('include', bills_url) 
    cy.get(createBillButton).should('have.attr', 'href').and('include', newBill_url)
    cy.get(createBillButton).click()
    cy.url().should('include', newBill_url)
    cy.get(createBillBackButton).should('have.attr', 'href').and('include', bills_url)
    cy.get(createBillBackButton).click()
    cy.get(billsPageName).should('contain', cat3)

    

}


// Exports
module.exports = {
    confirmBillsPage,

}