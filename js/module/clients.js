export const getAllClientsFromSpain = async()=>{
    let res = await fetch("http://localhost:5504/clients")
    let data = res.json()
    let dataUpdate = []
    

}