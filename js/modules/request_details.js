// --------- CONSULTAS MULTITABLA ----------------

import {getAllRequests} from "./requests.js"
import {getAllClients} from "./clients.js"
import {getAllProducts} from "./products.js"

//11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const getAllDifferentProductGamasOfClient = async() => {

    let res = await fetch("http://localhost:5507/request_details")
    let data = await res.json()
    let dataUpdate = []
    let allRequests = await getAllRequests()
    let allProducts = await getAllProducts()
    let allClients = await getAllClients()

    for (let client of allClients) {
        let resultado = {
            client_name: client.client_name,
            boughtGamas: new Set()
        }
        for (let request of allRequests){
            if (request.code_client == client.code_client){
                for (let requestDetail of data){
                    if (request.code_request == data.code_request){
                        for (let product of allProducts){
                            if (requestDetail.code_product == product.code_product){
                                let {gama} = product 
                                datosCliente.boughtGamas.add(gama)
                            }
                        }
                    }
                }
                
            }
        }
        resultado.boughtGamas = Array.from(resultado.boughtGamas)
        if (resultado.boughtGamas.length >= 1) {
            dataUpdate.push(resultado)
        }
    }

    return dataUpdate
}                               

