module.exports = {

    // Index page related test elements

    base_url: 'http://localhost:3000/login',
    siteTitle: 'Testers Hotel',
    indexPageAssert: 'Login',
    logoutButton: '.user > .btn',

    username: 'tester01',
    password: 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',
    loginAssert: 'Welcome tester01!',   // first visible on dashboard page

    // Dashboard page related test elements

    dash_url: 'http://localhost:3000/',
    dashboardPageAssert: 'Tester Hotel Overview',
    cat1: 'Rooms',
    cat2: 'Clients',
    cat3: 'Bills',
    cat4: 'Reservations',
    logoutAssert: 'Login',   // index page

    //Rooms
    rooms_url: '/rooms',
    
    //Bills
    billsDashInfo1: 'Total:',
    billsDashInfo2: 'Paid:',
    bills_url: 'http://localhost:3000/bills',
    newBill_url: '/bill/new',
    bill1_url: 'http://localhost:3000/bill/1',
    

    //Clients
    clients_url: 'http://localhost:3000/clients',

}