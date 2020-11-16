/// <reference types="cypress" />


// Elements: New Client
const pageArea = '#app'
const newClientFormErrors = '.error'
const newClientSaveButton = '.actions > .blue'


// Actions / Functions

function createNewClient (cy, clientsComplete_url, newClient_url, cat2_0, clients_url, cat2 ){
    //Assert create client page
    cy.visit(clientsComplete_url).contains('Create Client').click()
    cy.url().should('include', newClient_url)
    cy.get('h2').contains(cat2_0)
    cy.get('.actions [href="/clients"]').contains('Back')

    //check all empty form field validations
    cy.get(pageArea).contains('Save').click()  
    cy.get(newClientFormErrors).should('have.length', 3)
    cy.get('.error:first').should('have.text', 'Name must be set').next(newClientFormErrors).contains('Email must be set')
    .next('.error:last').contains('Telephone must be set')
    
    //New Client form: enter correct format data to all input fields
    cy.get('label').should('have.length', 3)
    cy.get('label:first').contains('label', 'Name').next('input').type('Samy J.', { parseSpecialCharSequences: false })
    cy.get('label').contains('Email').next('input').should('attr', 'type', 'email').type('samyj@gmail.com')
    cy.get('label:last').contains('Telephone').next('input').should('attr', 'type', 'text')
    .type('+1 (415) 444-4501', { parseSpecialCharSequences: false })
    cy.get(newClientSaveButton).click()

    //Assert new client card saved and visible on /clients page 
    cy.url().should('include', clients_url)
    cy.get('h2').contains(cat2)
    cy.log('New added client card should be located last in list')
    cy.get('.medium:last').contains('SJ')
    cy.get('.clients h3:last').contains('Samy J.').next().contains('Email: samyj@gmail.com')
    .next().contains('Telephone: +1 (415) 444-4501')
}


// Exports
module.exports = {
    createNewClient,

}


