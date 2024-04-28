import {getAllRepresentatives} from "./employees.js"
import {getAllPayments} from "./payments.js"
import {getAllOffices} from "./offices.js"
import {getAllRequests} from "./requests.js"




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

    dataUpdate = Array.from(dataUpdate)

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

//-------------------------------------------------------------------------------------------------------------------------------------------

//CONSULTAS MULTITABLA



//.1 Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.



export const getAllClientsAndRepresentative = async()=>{
    let res = await fetch ("http://localhost:5501/clients")
    let data = await res.json()
    let dataUpdate = []
    let allRepresentatives = await getAllRepresentatives()

    for (let client of data){
        for (let representative of allRepresentatives){
            if (representative.codigo == client.code_employee_sales_manager){
                dataUpdate.push({
                    codigo_cliente: client.client_code,
                    nombre_cliente: client.client_name,
                    nombre_representante: representative.nombre,
                    apellidos_representante: representative.apellidos
                })
            }
        }
    }

    return dataUpdate
}


//2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientsMadePaymentsAndNameRepresentative = async()=>{

    let dataUpdate = new Set()
    let clientsAndRepresentatives = await getAllClientsAndRepresentative()
    let allPayments = await getAllPayments()


    for (let payment of allPayments){
        for(let cr of clientsAndRepresentatives){

            if (cr.codigo_cliente == payment.code_client){
                dataUpdate.add(JSON.stringify(
                    {
                    nombre_cliente: cr.nombre_cliente,
                    nombre_representante: cr.nombre_representante,
                    apellidos_representante: cr.apellidos_representante
                }))
            }

        }
    }

    dataUpdate = Array.from(dataUpdate).map(val => JSON.parse(val))

    return dataUpdate
}


//3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientNOTMadePaymentsAndNameRepresentative = async()=>{

    let dataUpdate = []
    let clientsAndRepresentatives = await getAllClientsAndRepresentative()
    let allPayments = await getAllPayments()

    for (let cr of clientsAndRepresentatives){
        let paymentEncontrado = false
        for (let payment of allPayments){
            if (cr.codigo_cliente == payment.code_client){
                paymentEncontrado = true
            }
        }
        if (!paymentEncontrado){
            dataUpdate.push({
                nombre_cliente: cr.nombre_cliente,
                nombre_representante: cr.nombre_representante,
                apellidos_representante: cr.apellidos_representante
            })
        }
    }

    return dataUpdate
}

//4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllClientsThatMadePaymentsAndOfficeRepresentative = async()=>{

    let datagetClientsPaymentsAndSaleAgentFullInformation = await getClientsPaymentsAndSaleAgentFullInformation()
    let allOffices = await getAllOffices()
    let dataUpdate = []

    //Recorrer todos los clientes que realizaron pagos
    for (let client of datagetClientsPaymentsAndSaleAgentFullInformation){
        //recorrer todas las oficinas que hay 
        for (let office of allOffices){
            //si el codigo del representante del cliente es igual al codigo de alguna oficina
            if (client.code_employee_sales_manager.codigo_oficina == office.code_office){
                //añadir a la dataUpdate los siguientes datos:
                dataUpdate.push({
                    //datos:
                    nombre_cliente: client.client_name,
                    //nombre del representante del cliente
                    nombre_representante: client.code_employee_sales_manager.nombre,
                    apellidos_representante: client.code_employee_sales_manager.apellidos,
                    //ciudad de la oficina
                    ciudad_oficina: office.city

                })
            }
        }
    }

    return dataUpdate

}


//5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllClientsThatNotMadePaymentsAndOfficeRepresentative = async()=>{

    let datagetClientsthatNotPaymentsAndSaleAgentFullInformation = await getClientsNotPaymentsAndSaleAgentFullInformation()
    let allOffices = await getAllOffices()
    let dataUpdate = []

    //Recorrer todos los clientes que no realizaron pagos
    for (let client of datagetClientsthatNotPaymentsAndSaleAgentFullInformation){
        //recorrer todas las oficinas que hay 
        for (let office of allOffices){
            //si el codigo del representante del cliente es igual al codigo de alguna oficina
            if (client.code_employee_sales_manager.codigo_oficina == office.code_office){
                //añadir a la dataUpdate los siguientes datos:
                dataUpdate.push({
                    //datos:
                    nombre_cliente: client.client_name,
                    //nombre del representante del cliente
                    nombre_representante: client.code_employee_sales_manager.nombre,
                    apellidos_representante: client.code_employee_sales_manager.apellidos,
                    //ciudad de la oficina
                    ciudad_oficina: office.city

                })
            }
        }
    }

    return dataUpdate

}


//6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

export const getAllAdressOfficesThatHaveClientsFuenlabrada = async() =>{

    let res = await fetch("http://localhost:5504/offices")
    let allOffices = await res.json()
    let allRepresentatives = await getAllRepresentatives()
    let dataUpdate = new Set()
    let allClients = await getAllClients()

    for (let office of allOffices) {
        for (let employee of allRepresentatives) {
            if (employee.codigo_oficina== office.code_office) {
                for (let client of allClients) {
                    if (client.code_employee_sales_manager == employee.codigo) {
                        if (client.city == "Fuenlabrada") {
                            dataUpdate.add(JSON.stringify({
                                code_office: office.code_office,
                                address: office.address1,
                                address2: (office.address2 || "No registrado")
                            }))
                        }
                    }
                }
            }
        }
    }
    dataUpdate = Array.from(dataUpdate).map(resultado => JSON.parse(resultado))
    return dataUpdate
    
}

//7.Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllClientsNameAndWithRepresentativesCityOffice = async() => {
    let allOffices = await getAllOffices()
    let allClients = await getAllClients()
    let allRepresentatives = await getAllRepresentatives()
    let dataUpdate = []

    for (let client of allClients) {
        for (let employee of allRepresentatives){
            if (client.code_employee_sales_manager == employee.codigo) {
                for (let office of allOffices) {

                    if (employee.codigo_oficina == office.code_office) {
                        dataUpdate.push({
                            client_name: client.client_name,
                            employee_sales_manager: `${employee.nombre} ${employee.apellidos}`,
                            office_city: office.city
                        })
                    }
                }
            }
        }
    }
    return dataUpdate
}

//10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

export const getAllClientsNotDeliveredOnTime = async() => {
    let allRequests = await getAllRequests()
    let allClients = await getAllClients()
    let dataUpdate = new Set()

    for (let request of allRequests) {

        let {date_wait, date_delivery} = request
        let fechaEsperada = Date.parse(date_wait)
        let fechaEntrega = Date.parse(date_delivery)

        if (fechaEntrega > fechaEsperada){
            for (let client of allClients){
                if (request.code_client == client.client_code) {
                    dataUpdate.add(JSON.stringify(client.client_name))
                }
            }
        }

    }

    dataUpdate = Array.from(dataUpdate).map(client => JSON.parse(client))

    return dataUpdate
}


// --------------------- CONSULTAS MULTITABLA - COMPOSICIÓN EXTERNA ---------------------


//1.Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago


export const getAllClientsThayNOTmadeAnyPayment = async()=>{

    let allClients = await getAllClients()
    let allPayments = await getAllPayments()
    let dataUpdate = new Set()

    for (let client of allClients){
        let paymentEncontrado = false
        for (let payment of allPayments){
            if (payment.code_client == client.client_code){
                paymentEncontrado = true
            }
        }
        if (!paymentEncontrado){
            dataUpdate.add(JSON.stringify(client))
        }
    }

    //Sacar un array y de una vez parsearlo para que se convierta a un objeto de JS
    return Array.from(dataUpdate).map (element => JSON.parse(element))

}





// ------------------------------ MODULOS----------------------------------

export const getAllClients = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json()
    return data

}



export const getClientsPaymentsAndSaleAgentFullInformation = async() => {
    let res = await fetch("http://localhost:5505/payments")
    let dataPayments = await res.json()
    let dataAllRepresentatives = await getAllRepresentatives()
    let allClients = await getAllClients()
    console.log()
    // Clientes que han realizado pagos
    let allClientsThatMadePayments = new Set()
    for (let payment of dataPayments) {
        for (let client of allClients) {
            if (payment.code_client == client.client_code) {
                allClientsThatMadePayments.add(JSON.stringify(client))
            }
        }
    }

    allClientsThatMadePayments = Array.from(allClientsThatMadePayments).map(client => JSON.parse(client))

    for (let employee of dataAllRepresentatives){
        for (let client of allClientsThatMadePayments){
            if (employee.codigo == client.code_employee_sales_manager){
                client.code_employee_sales_manager = employee
            }
        }
    }

    return allClientsThatMadePayments

}

export const getClientsNotPaymentsAndSaleAgentFullInformation = async() => {
    let res = await fetch("http://localhost:5505/payments")
    let dataPayments = await res.json()
    let dataAllRepresentatives = await getAllRepresentatives()
    let allClients = await getAllClients()

    // Clientes que no han realizado pagos
    let allClientsThatNotMadePayments = []
    for (let client of allClients) {
        let paymentEncontrado = false
        for (let payment of dataPayments) {
            if (payment.code_client == client.client_code) {
                paymentEncontrado = true
            }
        }
        if (!paymentEncontrado){
            allClientsThatNotMadePayments.push(client)
        }

    }

    for (let employee of dataAllRepresentatives){
        for (let client of allClientsThatNotMadePayments){
            if (employee.codigo == client.code_employee_sales_manager){
                client.code_employee_sales_manager = employee
            }
        }
    }

    return allClientsThatNotMadePayments

}


