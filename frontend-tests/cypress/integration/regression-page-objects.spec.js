/// <reference types="cypress" />

//import * as indexHeadMeta from '../../../rasi10-hotel-test-vue/public/index.html'

import * as targets from '../targets/targets'
import * as indexFuncs00 from '../pages/indexPage'
import * as dashboardFuncs00 from '../pages/dashboardPage'
import * as roomsFuncs01 from '../pages/roomsPage'
import * as billsFuncs02 from '../pages/billsPage'
import * as billsFuncs03 from '../pages/billsPage'
import * as billsFuncs04 from '../pages/billsPage'
import * as billsFuncs05 from '../pages/billsPage'
import { base_url } from '../targets/targets'


// Test suite
describe('Test suite', function(){
    
    
// Did not work needed "Error: Webpack Compilation Error"
       // need a "Loader" - module bundler https://webpack.js.org/concepts/#loaders 
    
       /* before(() => {
            cy.document()
            it('check main index <head> for <title> content', ()=> {
                cy.title().should('eq', 'Testers Hotel')
            })
        })  */    
    
    /* Onset to every testcase will start on home page:
    Perform user "tester01" login, enter site Dashboard and assert Dashboard page. */
   
    // Test-cases 00

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs00.confirmIndexPage(cy, targets.base_url, targets.siteTitle, targets.indexPageAssert)
        indexFuncs00.performValidLogin(cy, targets.username, targets.password, targets.loginAssert)
        dashboardFuncs00.checkTitleOfDashboardPage(cy, targets.siteTitle)
        dashboardFuncs00.checkDashboardPageName(cy, targets.dashboardPageAssert)
        //billsFuncs05.nullifyBill1PaidCheckbox(cy,)
        dashboardFuncs00.checkDashboardFourCats(cy, targets.cat1, targets.cat2, 
            targets.cat3, targets.cat4)
    }) 

    // Ending every testcase with perform system logout, return to home page

    afterEach(() => {
        indexFuncs00.performLogout(cy, targets.logoutButton, targets.logoutAssert)
    }) 


    // Test-case 01
    it('Rooms page enter & exit ', function(){
        roomsFuncs01.confirmRoomsPage(cy, targets.rooms_url, 
           targets.cat1, targets.dash_url)
   }) 

    //Test-case 02
    it('Bills: assert block data, enter Bills page, enter & exit Create Bill page', function(){
        billsFuncs02.confirmBillsBlockandActionCreate(cy, targets.billsDashInfo1, targets.billsDashInfo2,
            targets.cat3, targets.bills_url, targets.newBill_url) 
    }) 

    //Test-cast 03
    it.only('Assert already existing bill 1 card data and Edit action', function(){
        billsFuncs03.checkFirstBillCardData(cy, targets.bills_url, targets.bill1_url)
    }) 

    //Test-case 04
    it('Assert Bill:1 page data fields.Change value.Change paid & save.', function(){
        billsFuncs04.checkBill1PageDataFields(cy, targets.bill1_url)
    })

    //Test-case 05
    it('Change Bill: 1 from Paid:No to Paid:Yes. Assert Paid:Yes', function(){
        billsFuncs05.performBill1UnpaidToPaid(cy,)

    })
 

}) 
