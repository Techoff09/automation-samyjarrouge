/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'

// Test suite
describe('Test suite', function(){
    
    // Onset prior to every testcase starts on home page:
    // Perfroms user "tester01" login & enters Dashboard page

    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashboardFuncs.checkWelcomeUsername(cy, 'Welcome tester01!')
        dashboardFuncs.checkTitleOfDashboardPage(cy)
    })

    // Ending every testcase perform system logout returning to home page

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })


    // Test-case 01
    it('Dashboard four categories', function(){

    })

})