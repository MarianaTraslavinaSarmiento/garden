import { diffDays } from "@formkit/tempo"

//7.Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const statusRequests = async()=>{
    let res = await fetch ("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = new Set()
    data.forEach(request =>{
        let {status}=request
        dataUpdate.add(status)
    })

    //Convertir el set en un array
    let objetoConvertido = Array.from(dataUpdate)
    return objetoConvertido
    
}

//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

export const getAllClientsMadePayment2008 = async()=>{
    let res = await fetch("http://localhost:5508/requests?")
    let data = await res.json()
    let dataUpdate = new Set()
    
    data.forEach(request =>{
        (request.date_request.startsWith("2008")) ? dataUpdate.add({
            codigo_cliente: request.code_client
        }) : undefined
    })

    let arrayConvertido = Array.from(dataUpdate)
    return arrayConvertido

}


//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllRequestsDeliveredLate = async()=>{

    let res = await fetch ("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(request =>{

        let {date_wait, date_delivery} = request;

        let fechaEsperada = Date.parse(date_wait)
        let fechaEntrega = Date.parse(date_delivery)

        if (fechaEntrega > fechaEsperada) {
            dataUpdate.push({
                codigo_pedido: request.code_request,
                codigo_cliente: request.code_client,
                fecha_esperada: request.date_wait,
                fecha_entrega: request.date_delivery
            });

        }

    })

    return dataUpdate

}

//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAllRequestsDelivered2DaysAgo = async()=>{
    let res = await fetch ("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(request => {

        if (request.date_delivery != null){
            let diferencia = diffDays(request.date_wait, request.date_delivery)
            if(diferencia >= 2) dataUpdate.push({
    
                codigo_pedido: request.code_request,
                codigo_cliente: request.code_client,
                fecha_esperada: request.date_wait,
                fecha_entrega: request.date_delivery
            })
        }
    })

    return dataUpdate
}


//11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

export const getAllRequestsRejectedIn2009 = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(request =>{
        if (request.date_request.startsWith("2009")&&request.status=='Rechazado'){
            dataUpdate.push(request)}
    })

    return dataUpdate

}

//12.Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.


