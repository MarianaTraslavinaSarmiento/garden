
import{
    getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil,} from "./modules/offices.js"

import {
    getAllEmployeesWithBossAndCodeSeven,
    getAllInformationBoss,
    getAllNotSalesRepresentative
}from "./modules/employees.js"

import {
    getAllClientsFromSpain
}from "./modules/clients.js"

import {
    statusRequests,
    getAllClientsMadePayment2008,
    getAllRequestsDeliveredLate,
    getAllRequestsDelivered2DaysAgo,
    getAllRequestsRejectedIn2009,
    getAllRequestOfJanuary
}from "./modules/requests.js"

// console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllCodeAndCityOffices())
// console.log(await getAllEmployeesWithBossAndCodeSeven());

// console.log(await getAllClientsFromSpain())
// console.log(await statusRequests())
// console.log(await getAllRequestsDeliveredLate())
//console.log(await getAllRequestsDelivered2DaysAgo())
//console.log(await getAllRequestsRejectedIn2009());
console.log(await getAllRequestOfJanuary())
