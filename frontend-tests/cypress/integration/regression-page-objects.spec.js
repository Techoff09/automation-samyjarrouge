/// <reference types="cypress" />


import * as targets from '../targets/targets'
import * as indexFuncs00 from '../pages/indexPage'
import * as dashboardFuncs00 from '../pages/dashboardPage'
import {
    default as roomsFuncs01,
    default as clientsFuncs02, 
    default as billsFuncs03,
    default as reservFuncs04,
} from '../pages/dashBlockPages'

import * as createClientFuncs05 from '../pages/newClientPage'
    


// Test suite
describe('Test suite', function(){
    
    
    /* Every testcase onset will start on index page:
    Perfrom user "tester01" login. Assert Dashboard page and Dashboard cats. */
   

    // Test-cases 00

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs00.confirmIndexPage(cy, targets.base_url, targets.siteTitle, targets.siteHeaderLogo, targets.indexPageAssert)
        indexFuncs00.performValidLogin(cy, targets.username, targets.password, targets.loginAssert)
        dashboardFuncs00.checkTitleOfDashboardPage(cy, targets.siteTitle)
        dashboardFuncs00.checkURLDashboardPage(cy, targets.dash_url)
        dashboardFuncs00.checkSiteHeaderLogo(cy, targets.siteHeaderLogo)
        dashboardFuncs00.checkDashboardPageName(cy, targets.dashboardPageAssert)
        dashboardFuncs00.checkDashboardFourCats(cy, targets.cat1, targets.cat2, 
            targets.cat3, targets.cat4)
    }) 

    // Ending every testcase with perform site-wide system logout, returns to index page

    afterEach(() => {
        indexFuncs00.performLogout(cy, targets.logoutButton,targets.logoutAssert)
    }) 


    // Test-case 01
    it('Rooms dashinfo/Page assert. Enter & exit ', function(){
        roomsFuncs01.confirmRoomsPage(cy, targets.rooms_url, targets.siteHeaderLogo, 
           targets.cat1, targets.dash_url, targets.dashboardPageAssert)
    }) 

    //Test-case 02
    it('Clients dashinfo/Page assert. Enter & exit', function(){
        clientsFuncs02.confirmClientsPage(cy, targets.clients_url, targets.siteHeaderLogo, targets.cat2, 
            targets.createClientButton_url, targets.dash_url, targets.dashboardPageAssert)
    })

    //Test-cast 03
    it('Bills dashinfo/Page assert. Enter & exit', function(){
        billsFuncs03.confirmBillsPage(cy, targets.bills_url, targets.siteHeaderLogo, targets.cat3, targets.newBill_url,
            targets.dash_url, targets.dashboardPageAssert)
    }) 

    //Test-case 04
    it('Reservations dashinfo/page assert. Enter & Exit.', function(){
        reservFuncs04.confirmReservationPage(cy, targets.reserv_url, targets.siteHeaderLogo, targets.cat4, targets.newReserv_url,
            targets.dash_url, targets.dashboardPageAssert)      
    })

    //Test-case 05
    it('Assert New Client page. Create new client. Assert new client on /clients page', function(){
        createClientFuncs05.createNewClient(cy, targets.clientsComplete_url, targets.newClient_url, targets.cat2_0, targets.clients_url, targets.cat2)

    })

})
