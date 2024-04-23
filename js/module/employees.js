export const getAllEmployeesWithBossAndCodeSeven = async()=>{
    let res = await fetch("http://localhost:5504/employees?code_boss=7")
    let data = await res.json()
    let dataUpdate = [];
    data.forEach(val =>{
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1}, ${val.lastname2}`
        })
    })

    return data
}



