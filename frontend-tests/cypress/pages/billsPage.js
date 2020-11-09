/// <reference types="cypress" />

const { billsDashInfo2, dashboardPageAssert, bills_url, bill1_url, dash_url } = require("../targets/targets")

/* Elements: ConfirmBillsBlockandActionCreate */

const billsBlock = '.blocks > :nth-child(3)'
const billsViewButton = ':nth-child(3) > .btn' 
const billsPageName = 'h2 > div'
const createBillButton = 'a.btn.blue'
const createBillBackButton = 'a.btn:nth-child(1)'
//const billsBackButton = 'a.btn:nth-child(1)' 

const billsPageBackButton = ':nth-child(3) > .btn'

    // Actions / Function

function confirmBillsBlockandActionCreate (cy, billsDashInfo1, billsDashInfo2, cat3,
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
    cy.get(billsPageBackButton).should('attr', 'href', '/').click()
    cy.contains(dashboardPageAssert)
}
    
    /* Elements: checkFirstBillCardData */

    const firstBillCard = 'div.card:nth-child(1)'
    const firstBillCardId = ':nth-child(1) > .id'
    const firstBillAction = ':nth-child(1) > .action'
    const firstBillActionMenu = ':nth-child(1) > div:nth-child(5)'
    const bills1pageName = 'h2 > div'
    

    // Actions / functions

function checkFirstBillCardData (cy, bills_url, bill1_url){
    cy.visit(bills_url)
    cy.get(firstBillCard).children().should('have.length', 4)
    cy.get(firstBillCardId).should('contain', 'ID: 1').next().should('contain', 'Value:').next().should('contain', 'Paid: Yes')
    cy.get(firstBillAction).click()
    cy.contains('Delete')
    cy.get(firstBillActionMenu).contains('Edit').click()
    cy.get(bills1pageName).contains('Bill: 1')  // Assert bill1 edit action
    cy.url().should('eq', bill1_url)       // Assert bill1 page
}
  
    /* Elements: checkBill1PageDataFields */

    const bill1BackButton = 'a.btn:nth-child(1)'
    const bill1ValueField = ':nth-child(3) > input'
    const bill1PaidCheckbox = '.checkbox'
    const bill1SaveButton = '.blue'
    const bill1CardValue = 'div.card:nth-child(1) > div:nth-child(2)'
    
    // Actions / functions

function checkBill1PageDataFields (cy, bill1_url){
    cy.visit(bill1_url)
    cy.contains('Bill: 1').should('be.visible')
    cy.get(bill1BackButton).should('attr', 'href', '/bills')

    cy.get('label').should('have.length', 4)
    cy.get('label:first').contains('label', 'ID').next().should('be.disabled')
    .and('have.value','1')
    
    cy.get('label').contains('label', 'Created', {matchcase: false})
    .next().should('be.disabled').and('have.property', 'text') 
    cy.log('CREATED field uses date-format: YYYY-MMM-DD hh:mm:ss.sssZ')

    cy.get('label').contains('label', 'Value (SEK)', {matchcase: false})
    .next().should('not.be.disabled').and('have.attr', 'type','number')
    cy.get(bill1ValueField).clear().type('5000') 

    cy.get('label:last').contains('label', 'Paid')
    .next().should('not.be.disabled').and('have.property', 'submit')
    cy.get(bill1PaidCheckbox).click()

    cy.get(bill1SaveButton).click()
    cy.url().should('eq', bills_url)
    cy.get(bill1CardValue).should('contain', '5000kr') 
}

    /* Elements: performBillUnpaidToPaid */
    //const firstBillAction = ':nth-child(1) > .action'
    //const firstBillActionMenu = ':nth-child(1) > div:nth-child(5)'
    //const bill1PaidCheckbox = '.checkbox'
    const bill1CardPaid = ':nth-child(1) > .paid'

function performBill1UnpaidToPaid (cy,){
    cy.visit(bills_url)
    cy.get(bill1CardPaid).should('contain', 'Paid: No')
    cy.get(firstBillAction).click()
    cy.get(firstBillActionMenu).contains('Edit').click()
    cy.get(bill1PaidCheckbox).click()
    cy.get(bill1SaveButton).click()
    cy.url().should('eq', bills_url)
    cy.get(bill1CardPaid).should('contain', 'Paid: Yes')
}

// .clear() does not work on a class ="checkbox".Works on 'input' type="checkbox" & other selectors.

/* function nullifyBill1PaidCheckbox (cy,){
    cy.visit(bill1_url)
    cy.get(bill1PaidCheckbox).clear()
    cy.get(bill1SaveButton).click()
    cy.visit(dash_url)
} */


// Exports
module.exports = {
    confirmBillsBlockandActionCreate,
    checkFirstBillCardData,
    checkBill1PageDataFields,
    performBill1UnpaidToPaid,
    //nullifyBill1PaidCheckbox,

}