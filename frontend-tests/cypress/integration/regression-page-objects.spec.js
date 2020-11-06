/// <reference types="cypress" />

import * as targets from '../targets/targets'
import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs00 from '../pages/dashboardPage'
import * as roomsFuncs01 from '../pages/roomsPage'
import * as billsFuncs02 from '../pages/billsPage'
//import { confirmBillsPage } from '../pages/billsPage'


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
        dashboardFuncs00.checkDashboardPageName(cy, targets.dashboardPageAssert)
        dashboardFuncs00.checkDashboardFourCats(cy, targets.cat1, targets.cat2, 
            targets.cat3, targets.cat4)
    })

    // Ending every testcase with perform system logout, return to home page

    afterEach(()=>{
        dashboardFuncs00.performLogout(cy, targets.logoutAssert)
    }) 



    // Test-case 01
    it('Rooms page enter & exit ', function(){
        roomsFuncs01.confirmRoomsPage(cy, targets.rooms_url, 
           targets.cat1, targets.dash_url)
   }) 

    //Test-case 02
    it('Bills category', function(){
        billsFuncs02.confirmBillsPage(cy, targets.billsDashInfo1, targets.billsDashInfo2,
            targets.cat3, targets.bills_url, targets.newBill_url)
       
    }) 


  

}) 