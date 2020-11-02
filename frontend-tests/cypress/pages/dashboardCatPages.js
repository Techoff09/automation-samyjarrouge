/// <reference types="cypress" />

const { rooms_url } = require("../targets/targets")

// Elements: four dashboard category blocks

//Rooms block
const roomsBlock = '.blocks > :nth-child(1)'
const roomsViewButton = ':nth-child(1) > .btn'
const roomsHeader = 'h2 > div'
const roomsBackButton = ':nth-child(3) > .btn'

// Actions / Functions

function confirmRoomsPage (cy, cat1, rooms_url, roomsPageHeader, base_url){
    cy.get(roomsBlock).should('contain', cat1)
    cy.contains('Number:')
    cy.get(roomsViewButton).click()
    cy.url().should('include', rooms_url)
    cy.get(roomsHeader).should('contain', roomsPageHeader)
    cy.get(roomsBackButton).click()
    cy.url().should('include', base_url)   
}



// Exports
module.exports = {
    confirmRoomsPage
}