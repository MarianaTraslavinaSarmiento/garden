

import "./components/clock.js";
import {getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil
 } from "./modules/offices.js"

import {getAllEmployeesWithBossAndCodeSeven,
    getAllInformationBoss,
    getAllNotSalesRepresentative} from "./modules/employees.js"


import {getAllClientsFromSpain,
    getAllClientsFromSpainAndRepresentative11Or30,
    getAllClientsAndRepresentative,
    getAllClientsMadePaymentsAndNameRepresentative,
    getAllClientNOTMadePaymentsAndNameRepresentative,
    getAllClientsThatMadePaymentsAndOfficeRepresentative,
    getAllClientsThatNotMadePaymentsAndOfficeRepresentative} from "./modules/clients.js"
    

import {statusRequests,
    getAllRequestsDeliveredLate,
    getAllRequestsDelivered2DaysAgo,
    getAllRequestsRejectedIn2009,
    getAllRequestOfJanuary,} from "./modules/requests.js";


import {getAllClientsMadePayment2008,
    getAllPaypalPayments2008,
    getAllPaymentTypes
} from "./modules/payments.js"

import{getAllProductosGamaOrnamentals} from "./modules/products.js"


// Constantes declaradas

const queryAboutTable1 = document.querySelector("#queryAboutTable1");
const queryAboutTable2 = document.querySelector("#queryAboutTable2");
const queryAboutTable3 = document.querySelector("#queryAboutTable3");
const queryAboutTable4 = document.querySelector("#queryAboutTable4");
const queryAboutTable5 = document.querySelector("#queryAboutTable5");
const queryAboutTable6 = document.querySelector("#queryAboutTable6");
const queryAboutTable7 = document.querySelector("#queryAboutTable7");
const queryAboutTable8 = document.querySelector("#queryAboutTable8");
const queryAboutTable9 = document.querySelector("#queryAboutTable9");
const queryAboutTable10 = document.querySelector("#queryAboutTable10");
const queryAboutTable11 = document.querySelector("#queryAboutTable11");
const queryAboutTable12 = document.querySelector("#queryAboutTable12");
const queryAboutTable13 = document.querySelector("#queryAboutTable13");
const queryAboutTable14 = document.querySelector("#queryAboutTable14");
const queryAboutTable15 = document.querySelector("#queryAboutTable15");
const queryAboutTable16 = document.querySelector("#queryAboutTable16");

const queryMultitable1 = document.querySelector("#queryMultitable1")
const queryMultitable2 = document.querySelector("#queryMultitable2")
const queryMultitable3 = document.querySelector("#queryMultitable3")
const queryMultitable4 = document.querySelector("#queryMultitable4")
const queryMultitable5 = document.querySelector("#queryMultitable5")

queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllCodeAndCityOffices();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 2
queryAboutTable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.ciudad}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Teléfono: </b> ${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 3
queryAboutTable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.email}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre}</p>
                        <p><b>Apellidos: </b> ${val.apellidos}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 4
queryAboutTable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4.children
    if(!report__container.innerHTML){
        let data = await getAllInformationBoss();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.puesto}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre}</p>
                        <p><b>Apellidos: </b> ${val.apellidos}</p>
                        <p><b>Email: </b> ${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 5
queryAboutTable5.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5.children
    if(!report__container.innerHTML){
        let data = await getAllNotSalesRepresentative();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.puesto}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre}</p>
                        <p><b>Apellidos: </b> ${val.apellidos}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// EJERCICIO 6
queryAboutTable6.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6.children
    if(!report__container.innerHTML){
        let data = await getAllClientsFromSpain();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 7
queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7.children
    if(!report__container.innerHTML){
        let data = await statusRequests();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Estado: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

//EJERCICIO 8
queryAboutTable8.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8.children
    if(!report__container.innerHTML){
        let data = await getAllClientsMadePayment2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo cliente: </b> ${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// EJERCICIO 9
queryAboutTable9.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsDeliveredLate();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Código del pedido: </b>${val.codigo_pedido}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código del pedido: </b> ${val.codigo_cliente}</p>
                        <p><b>Fecha esperada: </b> ${val.fecha_esperada}</p>
                        <p><b>Fecha entrega: </b> ${val.fecha_entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 10
queryAboutTable10.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsDelivered2DaysAgo();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Código del pedido: </b>${val.codigo_pedido}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código del cliente: </b> ${val.codigo_cliente}</p>
                        <p><b>Fecha esperada: </b> ${val.fecha_esperada}</p>
                        <p><b>Fecha entrega: </b> ${val.fecha_entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// EJERCICIO 11
queryAboutTable11.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11.children
    if(!report__container.innerHTML){
        let data = await getAllRequestsRejectedIn2009();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Código del pedido: </b>${val.code_request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Fecha del pedido: </b> ${val.date_request}</p>
                        <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                        <p><b>Fecha entrega: </b> ${val.date_delivery}</p>
                        <p><b>Estado: </b> ${val.status}</p>
                        <p><b>Comentario: </b> ${val.comment}</p>
                        <p><b>Código del cliente: </b> ${val.code_client}</p>
                        <p><b>ID del cliente: </b> ${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 12
queryAboutTable12.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable12.children
    if(!report__container.innerHTML){
        let data = await getAllRequestOfJanuary();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Código del pedido: </b>${val.code_request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Fecha del pedido: </b> ${val.date_request}</p>
                        <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                        <p><b>Fecha entrega: </b> ${val.date_delivery}</p>
                        <p><b>Estado: </b> ${val.status}</p>
                        <p><b>Comentario: </b> ${val.comment  || "No aplica"}</p>
                        <p><b>Código del cliente: </b> ${val.code_client}</p>
                        <p><b>ID del cliente: </b> ${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 13
queryAboutTable13.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable13.children
    if(!report__container.innerHTML){
        let data = await getAllPaypalPayments2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>ID del pago: </b>${val.id}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pago realizado por: </b> ${val.payment}</p>
                        <p><b>ID transacción: </b> ${val.id_transaction}</p>
                        <p><b>Fecha del pago: </b> ${val.date_payment}</p>
                        <p><b>Total: </b> ${val.total}</p>
                        <p><b>Comentario: </b> ${val.comment}</p>
                        <p><b>Código del cliente: </b> ${val.code_client}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 14
queryAboutTable14.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable14.children
    if(!report__container.innerHTML){
        let data = await getAllPaymentTypes();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">

                <div class="card__body">
                    <div class="body__marck">
                        <p>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 15
queryAboutTable15.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable15.children
    if(!report__container.innerHTML){
        let data = await getAllProductosGamaOrnamentals();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del producto: </b> ${val.code_product}</p>
                        <p><b>Gama: </b> ${val.gama}</p>
                        <p><b>Medida: </b> ${val.dimension}</p>
                        <p><b>Proveedor: </b> ${val.provider}</p>
                        <p><b>Descripción: </b> ${val.description  || "No registrado"}</p>
                        <p><b>Cantidad: </b> ${val.stock}</p>
                        <p><b>Precio de venta: </b> ${val.price_sale}</p>
                        <p><b>Precio de proveedor: </b> ${val.price_provider}</p>
                        <p><b>ID: </b> ${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 16
queryAboutTable16.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable16.children
    if(!report__container.innerHTML){
        let data = await getAllClientsFromSpainAndRepresentative11Or30();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b> ${val.client_code}</p>
                        <p><b>Nombre de contacto: </b> ${val.contact_name}</p>
                        <p><b>Apellido de contacto: </b> ${val.contact_lastname}</p>
                        <p><b>Teléfono: </b> ${val.phone}</p>
                        <p><b>Dirección 1: </b> ${val.address1}</p>
                        <p><b>Dirección 2: </b> ${val.address2  || "No registrado"} </p>
                        <p><b>Ciudad: </b> ${val.city}</p>
                        <p><b>Región: </b> ${val.region}</p>
                        <p><b>País: </b> ${val.country}</p>
                        <p><b>Código postal: </b> ${val.postal_code}</p>
                        <p><b>Código del representante: </b> ${val.code_employee_sales_manager}</p>
                        <p><b>Límite de crédito: </b> ${val.limit_credit}</p>
                        <p><b>ID: </b> ${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// CONSULTAS MULTITABLA

// EJERCICIO 1
queryMultitable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryMultitable1.children
    if(!report__container.innerHTML){
        let data = await getAllClientsAndRepresentative();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Cliente</b>: ${val.nombre_cliente}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre_representante}</p>
                        <p><b>Apellido: </b> ${val.apellidos_representante}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

//EJERCICIO 2
queryMultitable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryMultitable2.children
    if(!report__container.innerHTML){
        let data = await getAllClientsMadePaymentsAndNameRepresentative();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Cliente:</b> ${val.nombre_cliente}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre_representante}</p>
                        <p><b>Apellido: </b> ${val.apellidos_representante}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 3

queryMultitable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryMultitable3.children
    if(!report__container.innerHTML){
        let data = await getAllClientNOTMadePaymentsAndNameRepresentative();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Cliente:</b> ${val.nombre_cliente}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre_representante}</p>
                        <p><b>Apellido: </b> ${val.apellidos_representante}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
// EJERCICIO 4

queryMultitable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryMultitable4.children
    if(!report__container.innerHTML){
        let data = await getAllClientsThatMadePaymentsAndOfficeRepresentative();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Cliente:</b> ${val.nombre_cliente}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre_representante}</p>
                        <p><b>Apellido: </b> ${val.apellidos_representante}</p>
                        <p><b>Ciudad oficina: </b> ${val.ciudad_oficina}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// EJERCICIO 5

queryMultitable5.addEventListener("click", async(e)=>{
    let [,report__container] = queryMultitable5.children
    if(!report__container.innerHTML){
        let data = await getAllClientsThatNotMadePaymentsAndOfficeRepresentative();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div><b>Cliente:</b> ${val.nombre_cliente}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b> ${val.nombre_representante}</p>
                        <p><b>Apellido: </b> ${val.apellidos_representante}</p>
                        <p><b>Ciudad oficina: </b> ${val.ciudad_oficina}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

