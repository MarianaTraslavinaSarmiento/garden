

import "./components/clock.js";
import {getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil
 } from "./modules/offices.js"

import {getAllEmployeesWithBossAndCodeSeven,
    getAllInformationBoss,
    getAllNotSalesRepresentative} from "./modules/employees.js"


import {getAllClientsFromSpain} from "./modules/clients.js"

import {statusRequests,
    getAllRequestsDeliveredLate,
    getAllRequestsDelivered2DaysAgo,
    getAllRequestsRejectedIn2009} from "./modules/requests.js";


import {getAllClientsMadePayment2008} from "./modules/payments.js"



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