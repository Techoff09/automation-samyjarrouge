/// <reference types="cypress" />


// Elements 
const dashBlockCats = '.block h4'


// Actions / Functions

function checkTitleOfDashboardPage(cy, siteTitle){
    cy.title().should('eq', siteTitle)  
}

function checkDashboardPageName(cy, dashboardPageAssert){
    cy.contains(dashboardPageAssert)
}

function checkDashboardFourCats(cy, cat1, cat2, cat3, cat4 ){
    cy.get(dashBlockCats).should('have.length', 4).then(($el) => {
        expect($el.get(0).innerText).to.eq(cat1)
        expect($el.get(1).innerText).to.eq(cat2)
        expect($el.get(2).innerText).to.eq(cat3)
        expect($el.get(3).innerText).to.eq(cat4)
    })
}


// Exports
module.exports = {
    checkTitleOfDashboardPage,
    checkDashboardPageName,
    checkDashboardFourCats,
    
}