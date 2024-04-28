import {getAllOffices} from "./offices.js"
import {getAllClients} from "./clients.js"


//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

export const getAllEmployeesWithBossAndCodeSeven = async()=>{
    let res = await fetch ("http://localhost:5502/employees?code_boss=7")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(employee =>{
        dataUpdate.push({
            //validar email
            nombre: employee.name,
            apellidos: `${employee.lastname1} ${employee.lastname2}`,
            email: employee.email.replace(/.*?(\[)?([\w\.-]+@[\w\.-]+\.\w+)(\])?.*$/, '$2')
        })
        
    })

    return dataUpdate
}



//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

export const getAllInformationBoss = async()=>{

    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let dataUpdate = []
    
    data.forEach (employee =>{
        (employee.code_boss === null) ? dataUpdate.push({
            puesto: employee.position,
            nombre: employee.name,
            apellidos: `${employee.lastname1} ${employee.lastname2}`,
            email: employee.email.replace(/.*?(\[)?([\w\.-]+@[\w\.-]+\.\w+)(\])?.*$/, '$2') 
        }) : undefined

    })

    return dataUpdate
}

//5.Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

export const getAllNotSalesRepresentative = async()=>{
    let res = await fetch ("http://localhost:5502/employees?position_ne=Representante%20Ventas")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(employee =>{
        dataUpdate.push({
            nombre: employee.name,
            apellidos: `${employee.lastname1} ${employee.lastname2}`,
            puesto: employee.position        
        })
    })
   return dataUpdate
}



//Obtener la informacion de un empleado por su codigo

export const getEmployByCode = async()=>{
    let res = await fetch ("http://localhost:5502/employees")
    let dataClients = await res.json()
    return dataClients
}


//------------------- CONSULTAS MULTITABLAS --------------------------

//8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getAllEmployeesAndSupervisors = async() => {
    let res = await fetch ("http://localhost:5502/employees")
    let allEmployees = await res.json()
    let dataUpdate = []

    for (let employee of allEmployees) {
        for (let supervisor of allEmployees) {
            if (employee.code_boss == supervisor.employee_code) {
                dataUpdate.push({
                    nombre_empleado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                    nombre_jefe: `${supervisor.name} ${supervisor.lastname1} ${supervisor.lastname2}`
                })
            }
        }
    }
    return dataUpdate
}

// 9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.

export const getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors = async() => {
    let res = await fetch ("http://localhost:5502/employees")
    let allEmployees = await res.json()
    let dataUpdate = []

    for (let employee of allEmployees) {
        for (let supervisor of allEmployees) {
            if (employee.code_boss == supervisor.employee_code) {
                for (let jefe of allEmployees){
                    if (supervisor.code_boss == jefe.employee_code){
                        dataUpdate.push({
                            nombre_empleado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                            nombre_jefe: `${supervisor.name} ${supervisor.lastname1} ${supervisor.lastname2}`,
                            nombre_jefe_jefe: `${jefe.name} ${jefe.lastname1} ${jefe.lastname2}`
                        })
                    }
                }
            }
        }
    }
    return dataUpdate
}


// ---------------------- CONSULTAS COMPOSICION EXTERNA --------------------

//4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.

export const getAllEmployeesNotHaveOffice = async() =>{

    let res = await fetch ("http://localhost:5502/employees")
    let allEmployees = await res.json()
    let allOffices = await getAllOffices()
    let dataUpdate = new Set()

    for (let employee of allEmployees){
        let officeEncontrada = false
        for (let office of allOffices){
            if (office.code_office == employee.code_office){
                officeEncontrada = true
            }
        }

        if (!officeEncontrada){
            dataUpdate.add(JSON.stringify(employee))
        }

    }
    dataUpdate = Array.from(dataUpdate).map(element => JSON.parse(element))
    if (dataUpdate.length == 0){

        return [{
            error : "Todos los empleados tienen una oficina asignada"
        }]

    }else{
        return dataUpdate
    }
     
}

//5. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.

export const getAllEmployeesWithoutClients = async() => {

    let res = await fetch ("http://localhost:5502/employees")
    let allEmployees = await res.json()    
    let allClients = await getAllClients()
    let dataUpdate = new Set()

    for (let employee of allEmployees){
        let clientEncontrado = false
        for (let client of allClients){
            if (client.code_employee_sales_manager == employee.employee_code){
                clientEncontrado = true
            }
        }
        if (!clientEncontrado){
            dataUpdate.add(JSON.stringify(employee))
        }
    }
    return Array.from(dataUpdate).map(element => JSON.parse(element))
}

// 6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.

export const getAllEmployeesWhitoutClientsAndDataOffice = async () =>{

    let allEmployeesWithoutClients = await getAllEmployeesWithoutClients()
    let allOffices = await getAllOffices()

    for (let employee of allEmployeesWithoutClients){
        for (let office of allOffices){
            if (employee.code_office == office.code_office){
                employee.code_office = office

            }

        }
    }

    return allEmployeesWithoutClients
}


//7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.

export const getEmployeesThatNotHaveOfficeAndClients = async() => {
    let allEmployeesNotHaveOffice = await getAllEmployeesNotHaveOffice()
    let allEmployeesWithoutClients = await getAllEmployeesWithoutClients ()
    let dataUpdate = [...allEmployeesNotHaveOffice, ...allEmployeesWithoutClients]
    dataUpdate = dataUpdate.map(element => JSON.stringify(element))
    dataUpdate = Array.from(new Set(dataUpdate))
    dataUpdate = dataUpdate.map(element => JSON.parse(element))
    return dataUpdate
}




// ------------------ MODULOS --------------------

export const getAllRepresentatives = async()=>{

    let res = await fetch("http://localhost:5502/employees?position=Representante%20Ventas")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(representative =>{
        dataUpdate.push({
            codigo: representative.employee_code,
            nombre: representative.name,
            apellidos: `${representative.lastname1} ${representative.lastname2}`,
            codigo_oficina: representative.code_office
        })
    })

    return dataUpdate
}


export const getAllEmployees = async()=>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    return data
}

