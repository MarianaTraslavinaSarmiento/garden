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