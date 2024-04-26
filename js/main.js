
import{
    getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil,} from "./modules/offices.js"

import {
    getAllEmployeesWithBossAndCodeSeven,
    getAllInformationBoss,
    getAllNotSalesRepresentative,
    getAllRepresentatives
}from "./modules/employees.js"

import {
    getAllClientsFromSpain,
    getAllClientsFromSpainAndRepresentative11Or30,
    getAllClientsAndRepresentative,
    getAllClientsMadePaymentsAndNameRepresentative,
    getAllClientNOTMadePaymentsAndNameRepresentative,
    getAllClientsThatMadePaymentsAndOfficeRepresentative,
    getAllClientsThatNotMadePaymentsAndOfficeRepresentative

}from "./modules/clients.js"

import {
    statusRequests,
    getAllClientsMadePayment2008,
    getAllRequestsDeliveredLate,
    getAllRequestsDelivered2DaysAgo,
    getAllRequestsRejectedIn2009,
    getAllRequestOfJanuary,
    
}from "./modules/requests.js"

import {
    getAllPaypalPayments2008,
    getAllPaymentTypes
}from "./modules/payments.js"

import {
    getAllProductosGamaOrnamentals
}from "./modules/products.js"


// -------------------------- CONSULTAS -------------------------------

// console.log(await getAllCodeAndCityOffices())  
console.log(await getAllOfficesFromSpainCityAndMovil());
// console.log(await getAllCodeAndCityOffices())
// console.log(await getAllEmployeesWithBossAndCodeSeven());

// console.log(await getAllClientsFromSpain())
// console.log(await statusRequests())
// console.log(await getAllRequestsDeliveredLate())
//console.log(await getAllRequestsDelivered2DaysAgo())
//console.log(await getAllRequestsRejectedIn2009());
//console.log(await getAllRequestOfJanuary())
//console.log(await getAllPaypalPayments2008())
//console.log(await getAllPaymentTypes());
//console.log(await getAllProductosGamaOrnamentals());
//console.log(await getAllClientsFromSpainAndRepresentative11Or30());

// -------------------------- CONSULTAS MULTITABLA -------------------------------

//console.log(await getAllClientsAndRepresentative())  //1
//console.log(await getAllClientsMadePaymentsAndNameRepresentative()) //2
// console.log(await getAllClientNOTMadePaymentsAndNameRepresentative()) //3
//console.log(await getAllClientsThatMadePaymentsAndOfficeRepresentative()) // 4
// console.log(await getAllClientsThatNotMadePaymentsAndOfficeRepresentative())


// -------------------------- MODULOS -------------------------------

//console.log(await getAllRepresentatives())