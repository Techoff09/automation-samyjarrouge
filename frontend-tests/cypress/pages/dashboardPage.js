/// <reference types="cypress" />


// Elements cy.get('.username')
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'

// contenAssertion01 = 'Welcome tester01!'
// contentAssertion02 = 'Login'

// Actions / Functions

function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)  
}

function checkWelcomeUsername(cy, contentAssertion01){
    cy.contains(contentAssertion01)
}

function performLogout(cy, contentAssertion02){
    cy.get(logoutButton).click()
    cy.contains(contentAssertion02)
}

// Exports
module.exports = {
    checkTitleOfDashboardPage,
    checkWelcomeUsername,
    performLogout
}