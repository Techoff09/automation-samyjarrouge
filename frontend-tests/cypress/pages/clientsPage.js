/// <reference types="cypress" />

// Elements: dashboard Clients

//Clients block
const clientsBlock = '.blocks > :nth-child(2)'
const clientsViewButton = ':nth-child(2) > .btn'



// Actions / Functions

function confirmClientsPage (cy,){
    cy.get(clientsBlock).should('contain', cat2)
    cy.contains('Number:')
    cy.get(clientsViewButton).click()

}







// Exports
module.exports = {
    confirmClientsPage

}