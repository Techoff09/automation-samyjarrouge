/// <reference types="cypress" />

const { base_url } = require("../targets/targets")

// Elements Index
//const headerSiteRef = 'cy.get('h1 > .router-link-active')
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

// Actions / Functions

function confirmIndexPage(cy, base_url, siteTitle, indexPageAssert){
    cy.visit(base_url)
    cy.title().should('eq', siteTitle)
    cy.contains(indexPageAssert)
}

function performValidLogin(cy, username, password, loginAssert){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(loginAssert)
}

function performLogout(cy, logoutButton, logoutAssert){
    cy.get(logoutButton).click()
    cy.contains(logoutAssert)
}
// logout works from any site page

// Exports
module.exports = {
    confirmIndexPage,
    performValidLogin,
    performLogout
}
