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


// Actions / Functions

function confirmClientsPage (cy, clients_url, siteHeaderLogo, cat2, createClientButton_url, dash_url, dashboardPageAssert){
    cy.get(clientsDashInfo).should('contain', 'Number:')
    cy.get(clientsViewButton).should('have.text', 'View').click({multiple: true})
    cy.url().should('include', clients_url)
    cy.get('header').contains('header', siteHeaderLogo, {matchcase: false})
    cy.get('h2').contains(cat2).next().should('contain', 'Create Client', {matchcase: false})
    .and('attr', 'href', createClientButton_url)
    cy.get(clientsBackButton).should('have.text', 'Back').click()
    cy.url().should('eq', dash_url)
    cy.contains(dashboardPageAssert)
}


// Elements: Bills
const billsDashInfo = '.blocks > :nth-child(3)'
const billsBackButton = ':nth-child(3) > .btn'


function confirmBillsPage(cy, bills_url, siteHeaderLogo, cat3, newBill_url, dash_url, dashboardPageAssert){
    cy.get(billsDashInfo).contains('Total:').next().contains('Paid:').next().contains('View').click()
    cy.url().should('include', bills_url)
    cy.get('header').contains('header', siteHeaderLogo, {matchcase: false})
    cy.get('h2').contains(cat3).next().should('contain', 'Create Bill', {matchcase: false})
    .and('attr', 'href', newBill_url)
    cy.get(billsBackButton).contains('Back').click()
    cy.url().should('eq', dash_url)
    cy.contains(dashboardPageAssert)
}


// Elements: Reservations
const reservDashInfo = '.blocks > :nth-child(4)'
const reservBackButton = ':nth-child(3) > .btn'


// Actions / Functions

function confirmReservationPage(cy, reserv_url, siteHeaderLogo, cat4, newReserv_url, dash_url, dashboardPageAssert){
    cy.get(reservDashInfo).contains('Total:').next().contains('Current:').next().contains('View').click()
    cy.url().should('include', reserv_url)
    cy.get('header').contains('header', siteHeaderLogo, {matchcase: false})
    cy.get('h2').contains(cat4).next().should('contain', 'Create Reservation', {matchcase: false})
    .and('attr', 'href', newReserv_url)
    cy.get(reservBackButton).contains('Back').click()
    cy.url().should('eq', dash_url)
    cy.contains(dashboardPageAssert)
}


// Exports
module.exports = {
    confirmRoomsPage,
    confirmClientsPage,
    confirmBillsPage,
    confirmReservationPage,
    

}