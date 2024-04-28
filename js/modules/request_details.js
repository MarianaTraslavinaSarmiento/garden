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
            gamas: new Set()
        }
        for (let request of allRequests){
            if (request.code_client == client.client_code) {
                for (let requestDetail of data){
                    if (request.code_request == requestDetail.code_request){
                        for (let product of allProducts){
                            if (requestDetail.product_code == product.code_product){
                                let {gama} = product 
                                resultado.gamas.add(gama)
                            }
                        }
                    }
                }
                
            }
        }
        resultado.gamas = Array.from(resultado.gamas)
        if (resultado.gamas.length >= 1) {
            dataUpdate.push(resultado)
        }
    }
    return dataUpdate
}                               

