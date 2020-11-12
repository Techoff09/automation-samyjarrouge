/// <reference types="cypress" />


const { rooms_url, dashboardPageAssert, clients_url, site_HeaderLogo } = require("../targets/targets")

// Elements: Rooms

const roomsDashInfo = '.block:nth-child(1)'
const roomsViewButton = ':nth-child(1) > .btn'
const roomsPageAssert = 'h2 > div'
const createRoomButton = 'h2 > .btn' // a.btn:nth-child(2)
const roomsBackButton = ':nth-child(3) > .btn'


// Actions / Functions

function confirmRoomsPage (cy, rooms_url, siteHeaderLogo, cat1, dash_url, dashboardPageAssert){
    cy.get(roomsDashInfo).should('contain', 'Number:')
    cy.get(roomsViewButton).should('have.text', 'View').click()
    cy.url().should('include', rooms_url)
    cy.get('header').contains('header', siteHeaderLogo, {matchcase: false})
    cy.get(roomsPageAssert).should('contain', cat1)
    cy.get(createRoomButton).contains('Create Room', {matchcase: false}).and('have.attr', 'href', '/room/new')
    cy.get(roomsBackButton).should('have.text', 'Back').click()
    cy.url().should('eq', dash_url)
    cy.contains(dashboardPageAssert)   
}
// Elements: Clients
const clientsDashInfo = '.block:nth-child(2)'
const clientsViewButton = '.blocks > :nth-child(2) > .btn'
const clientsBackButton = ':nth-child(3) > .btn'



function confirmClientsPage (cy, clients_url, siteHeaderLogo, cat2, createClientButton_url, dash_url, dashboardPageAssert){
    cy.get(clientsDashInfo).should('contain', 'Number:')
    cy.get(clientsViewButton).should('have.text', 'View').click({multiple: true})
    cy.url().should('include', clients_url)
    cy.get('header').contains('header', siteHeaderLogo, {matchcase: false})
    cy.get('h2').contains(cat2).next().should('contain', 'Create Client')
    .and('attr', 'href', createClientButton_url)
    cy.get(clientsBackButton).should('have.text', 'Back').click()
    cy.url().should('eq', dash_url)
    cy.contains(dashboardPageAssert)
    

}


// Exports
module.exports = {
    confirmRoomsPage,
    confirmClientsPage,
    

}