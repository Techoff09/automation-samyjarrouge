/// <reference types="cypress" />


import * as targets from '../targets/targets'
import * as indexFuncs00 from '../pages/indexPage'
import * as dashboardFuncs00 from '../pages/dashboardPage'
import {
    default as roomsFuncs01,
    default as clientsFuncs02, 
    default as billsFuncs03,
    
} from '../pages/dashBlockPages'

    
//import * as roomsFuncs01. billsFuncs02 from '../pages/dashBlocksPages'

// Test suite
describe('Test suite', function(){
    
    
    /* Onset to every testcase will start on home page:
    Perfrom user "tester01" login, enter site Dashboard and assert Dashboard page. */
   

    // Test-cases 00

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs00.confirmIndexPage(cy, targets.base_url, targets.siteTitle, targets.indexPageAssert)
        indexFuncs00.performValidLogin(cy, targets.username, targets.password, targets.loginAssert)
        dashboardFuncs00.checkTitleOfDashboardPage(cy, targets.siteTitle)
        dashboardFuncs00.checkURLDashboardPage(cy, targets.dash_url)
        dashboardFuncs00.checkSiteHeaderLogo(cy, targets.siteHeaderLogo)
        dashboardFuncs00.checkDashboardPageName(cy, targets.dashboardPageAssert)
        dashboardFuncs00.checkDashboardFourCats(cy, targets.cat1, targets.cat2, 
            targets.cat3, targets.cat4)
    }) 

    // Ending every testcase with perform system logout, return to home page

    afterEach(() => {
        indexFuncs00.performLogout(cy, targets.logoutButton,targets.logoutAssert)
    }) 


    // Test-case 01
    it.only('Rooms dashinfo assert. Enter & exit ', function(){
        roomsFuncs01.confirmRoomsPage(cy, targets.rooms_url, targets.siteHeaderLogo, 
           targets.cat1, targets.dash_url, targets.dashboardPageAssert)
   }) 

    //Test-case 02
    it.skip('Clients dashinfo assert. Clients Enter & exit', function(){
        clientsFuncs02.confirmClientsPage(cy, targets.clients_url, targets.siteHeaderLogo, targets.cat2, 
            targets.createClientButton_url, targets.dash_url, targets.dashboardPageAssert)

    })


    /*it('Bills: assert block data, enter Bills page, enter & exit Create Bill page', function(){
        billsFuncs02.confirmBillsBlockandActionCreate(cy, targets.billsDashInfo1, targets.billsDashInfo2,
            targets.cat3, targets.bills_url, targets.newBill_url) 
    }) */

    //Test-cast 03
    it.skip('Assert already existing bill 1 card data and Edit action', function(){
        billsFuncs03.checkFirstBillCardData(cy, targets.bills_url, targets.bill1_url)
    }) 

    //Test-case 04
    it.skip('Assert Bill:1 page data fields.Change value.Change paid & save.', function(){
        billsFuncs04.checkBill1PageDataFields(cy, targets.bill1_url)
    })

    //Test-case 05
    it.skip('Change Bill: 1 from Paid:No to Paid:Yes. Assert Paid:Yes', function(){
        billsFuncs05.performBill1UnpaidToPaid(cy,)

    })

})
