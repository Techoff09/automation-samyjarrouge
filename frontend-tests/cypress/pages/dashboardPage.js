/// <reference types="cypress" />


// Elements cy.get('.username')
//const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'


// Actions / Functions

function checkTitleOfDashboardPage(cy, titleOfDashboardPage){
    cy.title().should('eq', titleOfDashboardPage)  
}

function checkDashboardHeading(cy, dashboardHeading){
    cy.contains(dashboardHeading)
}

function checkDashboardFourCats(cy, cat1, cat2, cat3, cat4){
    cy.contains(cat1)
    cy.contains(cat2)
    cy.contains(cat3)
    cy.contains(cat4)
}

function performLogout(cy, logoutAssert){
    cy.get(logoutButton).click()
    cy.contains(logoutAssert)
}

// Exports
module.exports = {
    checkTitleOfDashboardPage,
    checkDashboardHeading,
    checkDashboardFourCats,
    performLogout
}