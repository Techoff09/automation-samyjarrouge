/// <reference types="cypress" />

// Elements
const dashFourCatBlocks = '.blocks'
/*const cat1 = 'Rooms'
const cat2 = 'Clients'
const cat3 = 'Bills'
const cat4 = 'Reservations' */



// Actions / Functions
function checkDashboardFourCats(cy, cat1, cat2, cat3, cat4){
    cy.get(dashFourCatBlocks).should('contain', cat1).contains(cat2)
    .should('eq', cat3).and('match', cat4) 
}



// Exports
module.exports = {
    checkDashboardFourCats
}