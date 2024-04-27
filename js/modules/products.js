
//15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getAllProductosGamaOrnamentals = async()=>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales&_sort=-price_sale")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(product => {
        if (product.stock > 100){
            dataUpdate.push(product)
        }
    })

    return dataUpdate
}




export const getAllProducts = async() => {
    let res = await fetch("http://localhost:5506/products")
    let data = await res.json()
    return data
}