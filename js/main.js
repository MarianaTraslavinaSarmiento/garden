
import{
    getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil} from "./modules/offices.js"

import {
    getAllEmployeesWithBossAndCodeSeven,
    getAllInformationBoss,
    getAllNotSalesRepresentative,
    getAllRepresentatives,
    getAllEmployeesAndSupervisors,
    getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors,
    getAllEmployeesNotHaveOffice,
    getAllEmployeesWithoutClients,
    getAllEmployeesWhitoutClientsAndDataOffice,
    getEmployeesThatNotHaveOfficeAndClients
}from "./modules/employees.js"

import {
    getAllClientsFromSpain,
    getAllClientsFromSpainAndRepresentative11Or30,
    getAllClientsAndRepresentative,
    getAllClientsMadePaymentsAndNameRepresentative,
    getAllClientNOTMadePaymentsAndNameRepresentative,
    getAllClientsThatMadePaymentsAndOfficeRepresentative,
    getAllClientsThatNotMadePaymentsAndOfficeRepresentative,
    getAllAdressOfficesThatHaveClientsFuenlabrada,
    getAllClientsNameAndWithRepresentativesCityOffice,
    getAllClientsNotDeliveredOnTime,
    getAllClientsThayNOTmadeAnyPayment,
    getAllClientsThatNOTMadeRequest,
    getAllClientsWithNotPaymentAndRequest

}from "./modules/clients.js"

import {
    statusRequests,
    getAllRequestsDeliveredLate,
    getAllRequestsDelivered2DaysAgo,
    getAllRequestsRejectedIn2009,
    getAllRequestOfJanuary,
    
}from "./modules/requests.js"

import {
    getAllClientsMadePayment2008,
    getAllPaypalPayments2008,
    getAllPaymentTypes
}from "./modules/payments.js"

import {
    getAllProductosGamaOrnamentals,
    getAllProductsNeverAppearedInARequest,
    getAllProductsNeverAppearedRequestAndSomeDetails
    
}from "./modules/products.js"

import {
    getAllDifferentProductGamasOfClient,
}from "./modules/request_details.js"



// -------------------------- CONSULTAS -------------------------------

// console.log(await getAllCodeAndCityOffices())  
// console.log(await getAllOfficesFromSpainCityAndMovil());
//console.log(await getAllEmployeesWithBossAndCodeSeven())
// console.log(await getAllInformationBoss())
// console.log(await getAllNotSalesRepresentative())
// console.log(await getAllClientsFromSpain())
// console.log(await statusRequests())
// console.log(await getAllClientsMadePayment2008())
//console.log(await getAllRequestsDeliveredLate())
// console.log(await getAllRequestsDelivered2DaysAgo())
// console.log(await getAllRequestOfJanuary())
// console.log(await getAllPaypalPayments2008())
// console.log(await getAllPaymentTypes());
// console.log(await getAllProductosGamaOrnamentals())
// console.log(await getAllClientsFromSpainAndRepresentative11Or30());
// console.log(await getAllRequestsRejectedIn2009());


// -------------------------- CONSULTAS MULTITABLA -------------------------------

// console.log(await getAllClientsAndRepresentative())  //1
// console.log(await getAllClientsMadePaymentsAndNameRepresentative()) //2
// console.log(await getAllClientNOTMadePaymentsAndNameRepresentative()) //3
// console.log(await getAllClientsThatMadePaymentsAndOfficeRepresentative()) // 4
// console.log(await getAllClientsThatNotMadePaymentsAndOfficeRepresentative())
// console.log(await getAllAdressOfficesThatHaveClientsFuenlabrada())
// console.log(await getAllClientsNameAndWithRepresentativesCityOffice())
// console.log(await getAllEmployeesAndSupervisors())
// console.log(await getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors())
// console.log(await getAllClientsNotDeliveredOnTime())
// console.log(await getAllDifferentProductGamasOfClient())
// console.log(await getAllClientsThayNOTmadeAnyPayment())

// -------------------------- MODULOS -------------------------------

//console.log(await getAllRepresentatives())


// ------------------------- CONSULTAS COMPOSICION EXTERNA -------------------------
// console.log(await getAllClientsThayNOTmadeAnyPayment ());
// console.log(await getAllClientsThatNOTMadeRequest ());
// console.log(await getAllClientsWithNotPaymentAndRequest());
// console.log(await getAllEmployeesNotHaveOffice() );
// console.log(await getAllEmployeesWithoutClients());
// console.log(await getAllEmployeesWhitoutClientsAndDataOffice());
// console.log(await getEmployeesThatNotHaveOfficeAndClients());
// console.log(await getAllProductsNeverAppearedInARequest());
// console.log(await getAllProductsNeverAppearedRequestAndSomeDetails());
// console.log(await getAllOfficesNotWorkAnyEmployeesThatWereSalesAgentsOfClientThatMadeAFrutalesProduct());
