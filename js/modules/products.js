import {getAllRequestDetails} from "./request_details.js"

//15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getAllProductosGamaOrnamentals = async()=>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales&_sort=-price_sale")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(product => {
        if (product.stock > 100){
            dataUpdate.push(product)
        }
    })

    return dataUpdate
}

//-------------- CONSULTAS COMPOSICIÓN EXTERNA

//8. Devuelve un listado de los productos que nunca han aparecido en un pedido.

export const getAllProductsNeverAppearedInARequest = async() =>{

    let res = await fetch("http://localhost:5506/products")
    let allProducts = await res.json()
    let allRequestDetails = await getAllRequestDetails()
    let dataUpdate = new Set()

    for (let product of allProducts){
        let requestEncontrada = false
        for (let requestDetail of allRequestDetails){
            if (product.code_product == requestDetail.product_code){
                requestEncontrada = true
            }
        }
        if (!requestEncontrada){
            dataUpdate.add(JSON.stringify(product))
        }
    }

    return Array.from(dataUpdate).map(element=> JSON.parse(element))
    
}


export const getAllProducts = async() => {
    let res = await fetch("http://localhost:5506/products")
    let data = await res.json()
    return data
}

