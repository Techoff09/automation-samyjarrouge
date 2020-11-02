/// <reference types="cypress" />

// Elements
//const titleOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

// Actions / Functions

function confirmIndexPage(cy, titleOfIndexPage, indexPageAssert){
    cy.title().should('eq', titleOfIndexPage)
    cy.contains(indexPageAssert)
}

function performValidLogin(cy, username, password, loginAssert){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(loginAssert)
}

// Exports
module.exports = {
    confirmIndexPage,
    performValidLogin
}
