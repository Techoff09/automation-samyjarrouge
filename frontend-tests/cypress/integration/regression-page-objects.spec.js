/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as dashboardFuncs01 from '../pages/dashboardCatPage'
import * as targets from '../targets/targets'


// Test suite
describe('Test suite', function(){
    
    // Onset prior to every testcase start on home page:
    // Perfrom user "tester01" login & enter Dashboard site page

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.confirmIndexPage(cy, targets.titleOfIndexPage, targets.indexPageAssert)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.loginAssert)
        dashboardFuncs.checkTitleOfDashboardPage(cy, targets.titleOfDashboard)
        dashboardFuncs.checkDashboardHeading(cy, targets.dashboardHeading)
    })

    // Ending every testcase with perform system logout, return to home page

   /* afterEach(()=>{
        dashboardFuncs.performLogout(cy, targets.logoutAssert)
    }) */


   /* it('test', function(){
        confirmIndexPage(cy, targets.titleOfIndexPage, targets.indexPageAssert)
    }) */


    // Test-case 01
    it('Dashboard four categories', function(){
        dashboardFuncs01.checkDashboardFourCats(cy, targets.cat1, targets.cat2, 
            targets.cat3, targets.cat4)

   }) 

}) 