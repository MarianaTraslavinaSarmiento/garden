//1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

export const getAllCodeAndCityOffices = async()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val => {
        //Pushear los siguientes datos a dataUpdate
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    })

    return dataUpdate
}


//2. Devuelve un listado con la sciudad y el telefono de las oficinas de españa
export const getAllOfficesFromSpainCityAndMovil = async() =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        })
    })

    return dataUpdate

}


