/// <reference types="cypress" />

const { billsDashInfo2, dashboardPageAssert, bills_url } = require("../targets/targets")

// Elements: Bills

const billsBlock = '.blocks > :nth-child(3)'
const billsViewButton = ':nth-child(3) > .btn' 
const billsPageName = 'h2 > div'
const bills1pageName = 'h2 > div'
const createBillButton = 'a.btn.blue'
const createBillBackButton = 'a.btn:nth-child(1)'

const firstBillCard = 'div.card:nth-child(1)'
const firstBillCardId = ':nth-child(1) > .id'
const firstBillAction = ':nth-child(1) > .action'
const firstBillActionMenu = ':nth-child(1) > div:nth-child(5)'


//const billsBackButton = ':nth-child(3) > .btn'




// Actions / Functions

function confirmBillsBlockandPage (cy, billsDashInfo1, billsDashInfo2, cat3, bills_url, newBill_url){
    cy.get(billsBlock).contains(billsDashInfo1)
    cy.contains(billsDashInfo2)
    cy.get(billsViewButton).click()
    cy.get(billsPageName).should('contain', cat3)
    cy.url().should('eq', bills_url) 
    cy.get(createBillButton).should('have.attr', 'href').and('include', newBill_url)
    cy.get(createBillButton).click()
    cy.url().should('include', newBill_url)
    cy.get(createBillBackButton).should('have.attr', 'href').and('include', bills_url)
    cy.get(createBillBackButton).click()
    cy.get(billsPageName).should('contain', cat3)
}

function checkFirstBillCardData (cy, bills_url, bill1_url){
    cy.visit(bills_url)
    cy.get(firstBillCard).children().should('have.length', 4)
    cy.get(firstBillCardId).should('contain', 'ID: 1').next().should('contain', 'Value:').next().should('contain', 'Paid: No')
    cy.get(firstBillAction).click()
    cy.contains('Delete')
    cy.get(firstBillActionMenu).contains('Edit').click()
    cy.get(bills1pageName).contains('Bill: 1')  //Assert bill1 edit action
    cy.url().should('include', bill1_url)

   

    

}


// Exports
module.exports = {
    confirmBillsBlockandPage,
    checkFirstBillCardData,

}