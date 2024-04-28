import {getAllEmployees, getAllRepresentatives} from "./employees.js"
import {getAllClients} from "./clients.js"
import {getAllRequests} from "./requests.js"
import {getAllRequestDetails} from "./request_details.js"
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

//     //Recorrer todos los pedidos
    
//     //Necesito devolver las oficinas donde no trabaja Y, el cual me atendio a mi y yo hice una compra con la gama frutales

//     // recorrer los representantes de ventas 
//     // 







//     // recorrer los empleados que han sido represantes de ventas 
    
//     //si el codigo de los empleados que han sido representantes de ventas coincide con el codigo de empleado de algun cliente



//     //recorrer los codigos de los pedidos, luego si el codigo del pedido en los detalles del pedido coincide, entonces revisa el codigo del prodentonces destructura el codigo del producto y si coincide con algun codigo del producto revisa la gama


//     // revisar si el cliente hizo alguna compra de un producto frutales
//     // Si lo anterior es false, revisar el codigo de oficina del cliente
//     // revisar el codigo del empleado
//     // revisar el codigo de la oficina del empleado
//     //pushearlo al dataUpdate

// // export const getAllOfficesNotWorkAnyEmployeesThatWereSalesAgentsOfClientThatMadeAFrutalesProduct = async () =>{

// //     let allRepresentatives = await getAllRepresentatives()
// //     let allClients = await getAllClients()
// //     let allRequests = await getAllRequests()
// //     let allProducts = await getAllProducts ()
// //     let allEmployees = await getAllEmployees()
// //     let allDetailsRequests = await getAllRequestDetails()
// //     let dataUpdate = []


// // }

// //MODULOS 

export const getAllOffices = async() =>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    return data
}

