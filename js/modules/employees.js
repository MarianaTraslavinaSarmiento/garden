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
   //return dataUpdate
}



//Obtener la informacion de un empleado por su codigo

export const getEmployByCode = async()=>{
    let res = await fetch ("http://localhost:5502/employees")
    let dataClients = await res.json()
    return dataClients
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
