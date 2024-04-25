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


//16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

export const getAllClientsFromSpainAndRepresentative11Or30 = async ()=> {
    let res = await fetch ("http://localhost:5501/clients?city=Madrid")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(client => {

        if (client.code_employee_sales_manager == '11' || client.code_employee_sales_manager == '30'){
            dataUpdate.push(client)
        }

    })

    return dataUpdate

}

