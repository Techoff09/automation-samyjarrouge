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

function performLogout(cy, logoutAssert){
    cy.get(logoutButton).click()
    cy.contains(logoutAssert)
}

// Exports
module.exports = {
    checkTitleOfDashboardPage,
    checkDashboardHeading,
    performLogout
}