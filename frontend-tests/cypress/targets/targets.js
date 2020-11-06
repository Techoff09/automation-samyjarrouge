module.exports = {

    // Index page related test elements

    base_url: 'http://localhost:3000/login',
    titleOfIndexPage: 'Testers Hotel',
    indexPageAssert: 'Login',

    username: 'tester01',
    password: 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',
    loginAssert: 'Welcome tester01!',   // dashboard page

    // Dashboard page related test elements

    dash_url: 'http://localhost:3000/',
    titleOfDashboard: 'Testers Hotel',
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
    bills_url: '/bills',
    newBill_url: '/bill/new',
    

    //Clients
    clients_url: '3000/clients',

}