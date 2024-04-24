//6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllClientsFromSpain = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json()
    let dataUpdate = new Set()
    data.forEach(client => {
        //Sacar la propiedad client_name como una variable, ya el nombre del cliente es un string entonces va a imprimir son strings
        let {client_name} = client
        dataUpdate.add(client_name)
    })

    return dataUpdate
}
