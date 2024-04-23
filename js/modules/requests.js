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