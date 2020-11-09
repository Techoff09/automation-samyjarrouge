/// <reference types="cypress" />

const { billsDashInfo2, dashboardPageAssert, bills_url, bill1_url } = require("../targets/targets")

/* Elements: ConfirmBillsBlockandCreate */

const billsBlock = '.blocks > :nth-child(3)'
const billsViewButton = ':nth-child(3) > .btn' 
const billsPageName = 'h2 > div'
const createBillButton = 'a.btn.blue'
const createBillBackButton = 'a.btn:nth-child(1)'
const billsBackButton = 'a.btn:nth-child(1)' 

//const billsBackButton = ':nth-child(3) > .btn'

    // Actions / Function

function confirmBillsBlockandCreate (cy, billsDashInfo1, billsDashInfo2, cat3,
                                     bills_url, newBill_url){
                                       
    cy.get(billsBlock).contains(billsDashInfo1)
    cy.contains(billsDashInfo2)
    cy.get(billsViewButton).click()
    cy.get(billsPageName).should('contain', cat3)
    cy.url().should('eq', bills_url) 
    cy.get(createBillButton).should('have.attr', 'href').and('include', newBill_url)
    cy.get(createBillButton).click()
    cy.url().should('include', newBill_url)
    cy.get(createBillBackButton).should('have.attr', 'href').and('match', /bills/)
    cy.get(createBillBackButton).click()
    cy.get(billsPageName).should('contain', cat3)
}
    
    /* Elements: checkFirstBillCardData */

    const firstBillCard = 'div.card:nth-child(1)'
    const firstBillCardId = ':nth-child(1) > .id'
    const firstBillAction = ':nth-child(1) > .action'
    const firstBillActionMenu = ':nth-child(1) > div:nth-child(5)'
    const bills1pageName = 'h2 > div'
    

    // Actions / function

function checkFirstBillCardData (cy, bills_url, bill1_url){
    cy.visit(bills_url)
    cy.get(firstBillCard).children().should('have.length', 4)
    cy.get(firstBillCardId).should('contain', 'ID: 1').next().should('contain', 'Value:').next().should('contain', 'Paid: No')
    cy.get(firstBillAction).click()
    cy.contains('Delete')
    cy.get(firstBillActionMenu).contains('Edit').click()
    cy.get(bills1pageName).contains('Bill: 1')  // Assert bill1 edit action
    cy.url().should('eq', bill1_url)       // Assert bill1 page
}
  
    /* Elements: checkBill1PageDataFields */

    
    const IdField = ':nth-child(1) > input'
    const createdField = ':nth-child(2) > input'
    const bill1FieldArea = '#app > :nth-child(2) > :nth-child(2)'
    //const bill1FieldArea = 'div.container:nth-child(2) > div:nth-child(2)'
    

function checkBill1PageDataFields (cy, bill1_url){
    cy.visit(bill1_url)
    cy.contains('Bill: 1').should('be.visible')
    cy.get('a.btn:nth-child(1)').should('attr', 'href', '/bills')
    //cy.get('[=Delete]')

   
    cy.get('label:first').contains('label', 'ID').next().should('be.disabled')
    .and('have.value','1')
    
    cy.get('label').contains('label', 'Created', {matchcase: false})
    .next().should('be.disabled').and('have.property', 'text') 
    cy.log('CREATED field uses date-format: YYYY-MMM-DD hh:mm:ss.sssZ')

    cy.get('label').contains('label', 'Value (SEK)', {matchcase: false})
    .next().should('not.be.disabled').and('have.attr', 'type','number')
    cy.get(':nth-child(3) > input').clear().type('5000') 

}

function performBill1UnpaidToPaid (cy,){

}


// Exports
module.exports = {
    confirmBillsBlockandCreate,
    checkFirstBillCardData,
    checkBill1PageDataFields,
    performBill1UnpaidToPaid,

}