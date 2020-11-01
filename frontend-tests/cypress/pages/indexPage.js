/// <reference types="cypress" />

// Elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'
/* 
const username = 'tester01'
const password = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'
const contentAssertion01 = 'Tester Hotel Overview' 
*/



// Actions / Functions

function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}

function performValidLogin(cy, username, password, contentAssertion01){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentAssertion01)
}

// Exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin
}
