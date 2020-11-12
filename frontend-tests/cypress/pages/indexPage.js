/// <reference types="cypress" />


const { base_url } = require("../targets/targets")

// Elements Index

//const headerSiteRef = 'cy.get('h1 > .router-link-active')
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'
//const logoutButton = '.user > .btn'   //site-friendly button.btn
//const logoutButton = 'button.btn'  

// Actions / Functions

function confirmIndexPage(cy, base_url, siteTitle, indexPageAssert){
    cy.visit(base_url)
    cy.title().should('eq', siteTitle)
    cy.contains(indexPageAssert)
}

function performValidLogin(cy, username, password, loginAssert){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).should('have.text', 'Login', {matchcase: false} ).click()
    cy.contains(loginAssert)
    cy.get('header:first').contains('header', 'Tester Hotel')
}

function performLogout(cy, logoutButton, logoutAssert){
    cy.get(logoutButton).should('have.text', 'Logout').click()
    cy.contains(logoutAssert)
}


// Exports
module.exports = {
    confirmIndexPage,
    performValidLogin,
    performLogout,      // performLogout works from any site page
}
