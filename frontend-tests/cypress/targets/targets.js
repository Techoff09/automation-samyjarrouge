module.exports = {

    // Index page & site test elements

    base_url: 'http://localhost:3000/login',
    siteTitle: 'Testers Hotel',
    siteHeaderLogo: 'Tester Hotel',    //Header visible across entire site
    indexPageAssert: 'Login',
    logoutButton: '.user > .btn',   // entire site access. *Only works when class is saved in pages/targets

    username: 'tester01',
    password: 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',
    loginAssert: 'Welcome tester01!',   // first visible on dashpage then across entire site

    // Dashboard 
    dash_url: 'http://localhost:3000/',
    dashboardPageAssert: 'Tester Hotel Overview',
    cat1: 'Rooms',
    cat2: 'Clients',
    cat2_0: 'New Client',
    cat3: 'Bills',
    cat4: 'Reservations',
    logoutAssert: 'Login',   // index page

    //Rooms
    rooms_url: '/rooms',
    //createroom_url: '/room/new',

    //Clients
    clientsComplete_url: 'http://localhost:3000/clients',
    clients_url: '/clients',
    newClient_url: '/client/new',
    createClientButton_url: '/client/new',
    
    //Bills
    billsDashInfo1: 'Total:',
    billsDashInfo2: 'Paid:',
    bills_url: '/bills',
    newBill_url: '/bill/new',
    bill1_url: 'http://localhost:3000/bill/1',

    //Reservations
    reserv_url: '/reservations',
    newReserv_url: '/reservation/new',
    
}