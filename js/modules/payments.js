//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

export const getAllClientsMadePayment2008 = async()=>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json()
    let dataUpdate = new Set()
    
    data.forEach(payment =>{
        (payment.date_payment.startsWith("2008")) ? dataUpdate.add(
            payment.code_client
        ) : undefined
    })

    let arrayConvertido = Array.from(dataUpdate)
    return arrayConvertido

}


//13. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPaypalPayments2008 = async()=>{
    let res = await fetch("http://localhost:5505/payments?payment=PayPal&_sort=-total")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(payment =>{

        if (payment.date_payment.startsWith("2008")){
            dataUpdate.push(payment)
        }
    })

    return dataUpdate
}


//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPaymentTypes = async()=>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(payment =>{
        //si el tipo de pago aun no esta incluido
        if (!dataUpdate.includes(payment.payment)){
            dataUpdate.push(payment.payment)
        }
    })

    return dataUpdate
}


// MODULOS

export const getAllPayments = async() =>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(payment =>{
            dataUpdate.push(payment)
        }
    )

    return dataUpdate

}