/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs00 from '../pages/dashboardPage'
import * as dashboardFuncs01 from '../pages/dashboardCatPages'
import * as targets from '../targets/targets'


// Test suite
describe('Test suite', function(){
    
    // Onset to every testcase will start on home page:
    // Perfrom user "tester01" login, enter site Dashboard page and assert this page.

    // Test-case 00

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.confirmIndexPage(cy, targets.titleOfIndexPage, targets.indexPageAssert)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.loginAssert)
        dashboardFuncs00.checkTitleOfDashboardPage(cy, targets.titleOfDashboard)
        dashboardFuncs00.checkDashboardHeading(cy, targets.dashboardHeading)
        dashboardFuncs00.checkDashboardFourCats(cy, targets.cat1, targets.cat2, 
            targets.cat3, targets.cat4)
    })

    // Ending every testcase with perform system logout, return to home page

    /* afterAll(()=>{
        dashboardFuncs00.performLogout(cy, targets.logoutAssert)
    }) */ 



    // Test-case 01
    it('Rooms category enter & exit Rooms page', function(){
        dashboardFuncs01.confirmRoomsPage(cy, targets.cat1, targets.rooms_url, 
            targets.roomsPageHeader, targets.base_url)
   }) 

    //Test-case 02
   /* it('Dashboard four categories', function(){
       
    }) */

  

}) 