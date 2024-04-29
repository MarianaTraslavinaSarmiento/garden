import {getAllEmployees, getAllRepresentatives} from "./employees.js"
import {getAllClients} from "./clients.js"
import {getAllRequests} from "./requests.js"
import {getAllDifferentProductGamasOfClient} from "./request_details.js"
import {getAllProducts} from "./products.js"


//1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

export const getAllCodeAndCityOffices = async()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val => {
        //Pushear los siguientes datos a dataUpdate
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    })

    return dataUpdate
}


//2. Devuelve un listado con la sciudad y el telefono de las oficinas de españa
export const getAllOfficesFromSpainCityAndMovil = async() =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        })
    })

    return dataUpdate
    

}

// // ------------------------ CONSULTAS MULTITABLA COMPOSICION EXTERNA -----------------------------------


// // 10. Devuelve las oficinas donde no trabajan ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama Frutales.

export const getAllOfficesNotWorkAnyEmployeesThatWereSalesAgentsOfClientThatMadeAFrutalesProduct = async() => {
    let allGamasByClient = await getAllDifferentProductGamasOfClient()
    let allRepresentatives = await getAllRepresentatives()
    let allOffices = await getAllOffices()
    let SellersThatNot = []
    let dataUpdate = []

    for (let representative of allRepresentatives) {
        for (let client of allGamasByClient) {
            if (client.code_employee_sales_manager == representative.codigo){
                if (client.resultado.includes('Frutales')) {
                    SellersThatNot.push(representative)
                }

            }
        }
    }

    // Oficinas que no incluyan estos vendedores
    for (let office of allOffices) {
        let sellerFound = false
        for (let employee of SellersThatNot) {
            if (office.code_office == employee.code_office) {
                sellerFound= true
            }
        }
        if (!sellerFound) {
            dataUpdate.push(office)
        }
    }

    return dataUpdate
}

// //MODULOS 

export const getAllOffices = async() =>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    return data
}

