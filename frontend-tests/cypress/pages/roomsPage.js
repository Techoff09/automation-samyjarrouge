/// <reference types="cypress" />

const { rooms_url } = require("../targets/targets")

// Elements: Rooms

const roomsBlock = '.blocks > :nth-child(1)'
const roomsViewButton = ':nth-child(1) > .btn'
const roomsPageName = 'h2 > div'
const roomsBackButton = ':nth-child(3) > .btn'


// Actions / Functions

function confirmRoomsPage (cy, rooms_url, cat1, dash_url){
    cy.get(roomsBlock).should('contain', 'Number:')
    cy.get(roomsViewButton).click()
    cy.url().should('include', rooms_url)
    cy.get(roomsPageName).should('contain', cat1)
    cy.get(roomsBackButton).click()
    cy.url().should('eq', dash_url)   
}



// Exports
module.exports = {
    confirmRoomsPage,
    

}