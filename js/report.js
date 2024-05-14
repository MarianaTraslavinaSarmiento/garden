// import "./components/clock.js";
// import {getAllCodeAndCityOffices,
//     getAllOfficesFromSpainCityAndMovil
//  } from "./modules/offices.js"

// import {getAllEmployeesWithBossAndCodeSeven,
//     getAllInformationBoss,
//     getAllNotSalesRepresentative,
//     getAllEmployeesAndSupervisors,
//     getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors} from "./modules/employees.js"


// import {getAllClientsFromSpain,
//     getAllClientsFromSpainAndRepresentative11Or30,
//     getAllClientsAndRepresentative,
//     getAllClientsMadePaymentsAndNameRepresentative,
//     getAllClientNOTMadePaymentsAndNameRepresentative,
//     getAllClientsThatMadePaymentsAndOfficeRepresentative,
//     getAllClientsThatNotMadePaymentsAndOfficeRepresentative,
//     getAllAdressOfficesThatHaveClientsFuenlabrada,
//     getAllClientsNameAndWithRepresentativesCityOffice,
//     getAllClientsNotDeliveredOnTime
// } from "./modules/clients.js"
    

// import {statusRequests,
//     getAllRequestsDeliveredLate,
//     getAllRequestsDelivered2DaysAgo,
//     getAllRequestsRejectedIn2009,
//     getAllRequestOfJanuary,} from "./modules/requests.js";


// import {getAllClientsMadePayment2008,
//     getAllPaypalPayments2008,
//     getAllPaymentTypes
// } from "./modules/payments.js"

// import{getAllProductosGamaOrnamentals} from "./modules/products.js"

// import {getAllDifferentProductGamasOfClient} from "./modules/request_details.js"

// // Constantes declaradas

// const queryAboutTable1 = document.querySelector("#queryAboutTable1");
// const queryAboutTable2 = document.querySelector("#queryAboutTable2");
// const queryAboutTable3 = document.querySelector("#queryAboutTable3");
// const queryAboutTable4 = document.querySelector("#queryAboutTable4");
// const queryAboutTable5 = document.querySelector("#queryAboutTable5");
// const queryAboutTable6 = document.querySelector("#queryAboutTable6");
// const queryAboutTable7 = document.querySelector("#queryAboutTable7");
// const queryAboutTable8 = document.querySelector("#queryAboutTable8");
// const queryAboutTable9 = document.querySelector("#queryAboutTable9");
// const queryAboutTable10 = document.querySelector("#queryAboutTable10");
// const queryAboutTable11 = document.querySelector("#queryAboutTable11");
// const queryAboutTable12 = document.querySelector("#queryAboutTable12");
// const queryAboutTable13 = document.querySelector("#queryAboutTable13");
// const queryAboutTable14 = document.querySelector("#queryAboutTable14");
// const queryAboutTable15 = document.querySelector("#queryAboutTable15");
// const queryAboutTable16 = document.querySelector("#queryAboutTable16");

// const queryMultitable1 = document.querySelector("#queryMultitable1")
// const queryMultitable2 = document.querySelector("#queryMultitable2")
// const queryMultitable3 = document.querySelector("#queryMultitable3")
// const queryMultitable4 = document.querySelector("#queryMultitable4")
// const queryMultitable5 = document.querySelector("#queryMultitable5")
// const queryMultitable6 = document.querySelector("#queryMultitable6")
// const queryMultitable7 = document.querySelector("#queryMultitable7")
// const queryMultitable8 = document.querySelector("#queryMultitable8")
// const queryMultitable9 = document.querySelector("#queryMultitable9")
// const queryMultitable10 = document.querySelector("#queryMultitable10")
// const queryMultitable11 = document.querySelector("#queryMultitable11") 

// queryAboutTable1.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable1.children
//     if(!report__container.innerHTML){
//         let data = await getAllCodeAndCityOffices();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo: </b>${val.codigo}</p>
//                         <p><b>Ciudad: </b>${val.ciudad}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 2
// queryAboutTable2.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable2.children
//     if(!report__container.innerHTML){
//         let data = await getAllOfficesFromSpainCityAndMovil();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.ciudad}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Teléfono: </b> ${val.telefono}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 3
// queryAboutTable3.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable3.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesWithBossAndCodeSeven();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.email}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre}</p>
//                         <p><b>Apellidos: </b> ${val.apellidos}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 4
// queryAboutTable4.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable4.children
//     if(!report__container.innerHTML){
//         let data = await getAllInformationBoss();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.puesto}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre}</p>
//                         <p><b>Apellidos: </b> ${val.apellidos}</p>
//                         <p><b>Email: </b> ${val.email}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 5
// queryAboutTable5.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable5.children
//     if(!report__container.innerHTML){
//         let data = await getAllNotSalesRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.puesto}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre}</p>
//                         <p><b>Apellidos: </b> ${val.apellidos}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 6
// queryAboutTable6.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable6.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsFromSpain();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 7
// queryAboutTable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await statusRequests();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Estado: </b>${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //EJERCICIO 8
// queryAboutTable8.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable8.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsMadePayment2008();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo cliente: </b> ${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 9
// queryAboutTable9.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable9.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestsDeliveredLate();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.codigo_pedido}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Código del pedido: </b> ${val.codigo_cliente}</p>
//                         <p><b>Fecha esperada: </b> ${val.fecha_esperada}</p>
//                         <p><b>Fecha entrega: </b> ${val.fecha_entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 10
// queryAboutTable10.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable10.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestsDelivered2DaysAgo();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.codigo_pedido}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Código del cliente: </b> ${val.codigo_cliente}</p>
//                         <p><b>Fecha esperada: </b> ${val.fecha_esperada}</p>
//                         <p><b>Fecha entrega: </b> ${val.fecha_entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 11
// queryAboutTable11.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable11.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestsRejectedIn2009();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.code_request}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Fecha del pedido: </b> ${val.date_request}</p>
//                         <p><b>Fecha esperada: </b> ${val.date_wait}</p>
//                         <p><b>Fecha entrega: </b> ${val.date_delivery}</p>
//                         <p><b>Estado: </b> ${val.status}</p>
//                         <p><b>Comentario: </b> ${val.comment}</p>
//                         <p><b>Código del cliente: </b> ${val.code_client}</p>
//                         <p><b>ID del cliente: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 12
// queryAboutTable12.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable12.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestOfJanuary();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.code_request}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Fecha del pedido: </b> ${val.date_request}</p>
//                         <p><b>Fecha esperada: </b> ${val.date_wait}</p>
//                         <p><b>Fecha entrega: </b> ${val.date_delivery}</p>
//                         <p><b>Estado: </b> ${val.status}</p>
//                         <p><b>Comentario: </b> ${val.comment  || "No aplica"}</p>
//                         <p><b>Código del cliente: </b> ${val.code_client}</p>
//                         <p><b>ID del cliente: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 13
// queryAboutTable13.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable13.children
//     if(!report__container.innerHTML){
//         let data = await getAllPaypalPayments2008();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>ID del pago: </b>${val.id}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Pago realizado por: </b> ${val.payment}</p>
//                         <p><b>ID transacción: </b> ${val.id_transaction}</p>
//                         <p><b>Fecha del pago: </b> ${val.date_payment}</p>
//                         <p><b>Total: </b> ${val.total}</p>
//                         <p><b>Comentario: </b> ${val.comment}</p>
//                         <p><b>Código del cliente: </b> ${val.code_client}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 14
// queryAboutTable14.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable14.children
//     if(!report__container.innerHTML){
//         let data = await getAllPaymentTypes();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">

//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p>${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 15
// queryAboutTable15.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable15.children
//     if(!report__container.innerHTML){
//         let data = await getAllProductosGamaOrnamentals();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo del producto: </b> ${val.code_product}</p>
//                         <p><b>Gama: </b> ${val.gama}</p>
//                         <p><b>Medida: </b> ${val.dimension}</p>
//                         <p><b>Proveedor: </b> ${val.provider}</p>
//                         <p><b>Descripción: </b> ${val.description  || "No registrado"}</p>
//                         <p><b>Cantidad: </b> ${val.stock}</p>
//                         <p><b>Precio de venta: </b> ${val.price_sale}</p>
//                         <p><b>Precio de proveedor: </b> ${val.price_provider}</p>
//                         <p><b>ID: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 16
// queryAboutTable16.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable16.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsFromSpainAndRepresentative11Or30();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo del cliente: </b> ${val.client_code}</p>
//                         <p><b>Nombre de contacto: </b> ${val.contact_name}</p>
//                         <p><b>Apellido de contacto: </b> ${val.contact_lastname}</p>
//                         <p><b>Teléfono: </b> ${val.phone}</p>
//                         <p><b>Dirección 1: </b> ${val.address1}</p>
//                         <p><b>Dirección 2: </b> ${val.address2  || "No registrado"} </p>
//                         <p><b>Ciudad: </b> ${val.city}</p>
//                         <p><b>Región: </b> ${val.region}</p>
//                         <p><b>País: </b> ${val.country}</p>
//                         <p><b>Código postal: </b> ${val.postal_code}</p>
//                         <p><b>Código del representante: </b> ${val.code_employee_sales_manager}</p>
//                         <p><b>Límite de crédito: </b> ${val.limit_credit}</p>
//                         <p><b>ID: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // CONSULTAS MULTITABLA

// // EJERCICIO 1
// queryMultitable1.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable1.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente</b>: ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //EJERCICIO 2
// queryMultitable2.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable2.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsMadePaymentsAndNameRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 3
// queryMultitable3.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable3.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientNOTMadePaymentsAndNameRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })
// // EJERCICIO 4
// queryMultitable4.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable4.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsThatMadePaymentsAndOfficeRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                         <p><b>Ciudad oficina: </b> ${val.ciudad_oficina}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 5
// queryMultitable5.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable5.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsThatNotMadePaymentsAndOfficeRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                         <p><b>Ciudad oficina: </b> ${val.ciudad_oficina}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 6
// queryMultitable6.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable6.children
//     if(!report__container.innerHTML){
//         let data = await getAllAdressOfficesThatHaveClientsFuenlabrada();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código de oficina:</b> ${val.code_office}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Dirección 1: </b> ${val.address1}</p>
//                         <p><b>Dirección 2: </b> ${val.address2}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 7
// queryMultitable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable7.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsNameAndWithRepresentativesCityOffice();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Representante: </b> ${val.employee_sales_manager}</p>
//                         <p><b>Ciudad de la oficina 2: </b> ${val.office_city}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 8

// queryMultitable8.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable8.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesAndSupervisors();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Empleado: </b>${val.nombre_empleado}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del jefe: </b> ${val.nombre_jefe}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 9

// queryMultitable9.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable9.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Empleado: </b>${val.nombre_empleado}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Jefe: </b> ${val.nombre_jefe}</p>
//                         <p><b>Jefe del jefe: </b> ${val.nombre_jefe_jefe}</p>

                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 10

// queryMultitable10.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable10.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsNotDeliveredOnTime();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p>${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 11

// queryMultitable11.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable11.children
//     if(!report__container.innerHTML){
//         let data = await getAllDifferentProductGamasOfClient();// import "./components/clock.js";
// import {getAllCodeAndCityOffices,
//     getAllOfficesFromSpainCityAndMovil
//  } from "./modules/offices.js"

// import {getAllEmployeesWithBossAndCodeSeven,
//     getAllInformationBoss,
//     getAllNotSalesRepresentative,
//     getAllEmployeesAndSupervisors,
//     getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors} from "./modules/employees.js"


// import {getAllClientsFromSpain,
//     getAllClientsFromSpainAndRepresentative11Or30,
//     getAllClientsAndRepresentative,
//     getAllClientsMadePaymentsAndNameRepresentative,
//     getAllClientNOTMadePaymentsAndNameRepresentative,
//     getAllClientsThatMadePaymentsAndOfficeRepresentative,
//     getAllClientsThatNotMadePaymentsAndOfficeRepresentative,
//     getAllAdressOfficesThatHaveClientsFuenlabrada,
//     getAllClientsNameAndWithRepresentativesCityOffice,
//     getAllClientsNotDeliveredOnTime
// } from "./modules/clients.js"
    

// import {statusRequests,
//     getAllRequestsDeliveredLate,
//     getAllRequestsDelivered2DaysAgo,
//     getAllRequestsRejectedIn2009,
//     getAllRequestOfJanuary,} from "./modules/requests.js";


// import {getAllClientsMadePayment2008,
//     getAllPaypalPayments2008,
//     getAllPaymentTypes
// } from "./modules/payments.js"

// import{getAllProductosGamaOrnamentals} from "./modules/products.js"

// import {getAllDifferentProductGamasOfClient} from "./modules/request_details.js"

// // Constantes declaradas

// const queryAboutTable1 = document.querySelector("#queryAboutTable1");
// const queryAboutTable2 = document.querySelector("#queryAboutTable2");
// const queryAboutTable3 = document.querySelector("#queryAboutTable3");
// const queryAboutTable4 = document.querySelector("#queryAboutTable4");
// const queryAboutTable5 = document.querySelector("#queryAboutTable5");
// const queryAboutTable6 = document.querySelector("#queryAboutTable6");
// const queryAboutTable7 = document.querySelector("#queryAboutTable7");
// const queryAboutTable8 = document.querySelector("#queryAboutTable8");
// const queryAboutTable9 = document.querySelector("#queryAboutTable9");
// const queryAboutTable10 = document.querySelector("#queryAboutTable10");
// const queryAboutTable11 = document.querySelector("#queryAboutTable11");
// const queryAboutTable12 = document.querySelector("#queryAboutTable12");
// const queryAboutTable13 = document.querySelector("#queryAboutTable13");
// const queryAboutTable14 = document.querySelector("#queryAboutTable14");
// const queryAboutTable15 = document.querySelector("#queryAboutTable15");
// const queryAboutTable16 = document.querySelector("#queryAboutTable16");

// const queryMultitable1 = document.querySelector("#queryMultitable1")
// const queryMultitable2 = document.querySelector("#queryMultitable2")
// const queryMultitable3 = document.querySelector("#queryMultitable3")
// const queryMultitable4 = document.querySelector("#queryMultitable4")
// const queryMultitable5 = document.querySelector("#queryMultitable5")
// const queryMultitable6 = document.querySelector("#queryMultitable6")
// const queryMultitable7 = document.querySelector("#queryMultitable7")
// const queryMultitable8 = document.querySelector("#queryMultitable8")
// const queryMultitable9 = document.querySelector("#queryMultitable9")
// const queryMultitable10 = document.querySelector("#queryMultitable10")
// const queryMultitable11 = document.querySelector("#queryMultitable11") 

// queryAboutTable1.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable1.children
//     if(!report__container.innerHTML){
//         let data = await getAllCodeAndCityOffices();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo: </b>${val.codigo}</p>
//                         <p><b>Ciudad: </b>${val.ciudad}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 2
// queryAboutTable2.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable2.children
//     if(!report__container.innerHTML){
//         let data = await getAllOfficesFromSpainCityAndMovil();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.ciudad}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Teléfono: </b> ${val.telefono}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 3
// queryAboutTable3.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable3.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesWithBossAndCodeSeven();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.email}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre}</p>
//                         <p><b>Apellidos: </b> ${val.apellidos}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 4
// queryAboutTable4.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable4.children
//     if(!report__container.innerHTML){
//         let data = await getAllInformationBoss();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.puesto}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre}</p>
//                         <p><b>Apellidos: </b> ${val.apellidos}</p>
//                         <p><b>Email: </b> ${val.email}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 5
// queryAboutTable5.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable5.children
//     if(!report__container.innerHTML){
//         let data = await getAllNotSalesRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.puesto}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre}</p>
//                         <p><b>Apellidos: </b> ${val.apellidos}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 6
// queryAboutTable6.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable6.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsFromSpain();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 7
// queryAboutTable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await statusRequests();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Estado: </b>${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //EJERCICIO 8
// queryAboutTable8.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable8.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsMadePayment2008();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo cliente: </b> ${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 9
// queryAboutTable9.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable9.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestsDeliveredLate();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.codigo_pedido}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Código del pedido: </b> ${val.codigo_cliente}</p>
//                         <p><b>Fecha esperada: </b> ${val.fecha_esperada}</p>
//                         <p><b>Fecha entrega: </b> ${val.fecha_entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 10
// queryAboutTable10.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable10.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestsDelivered2DaysAgo();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.codigo_pedido}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Código del cliente: </b> ${val.codigo_cliente}</p>
//                         <p><b>Fecha esperada: </b> ${val.fecha_esperada}</p>
//                         <p><b>Fecha entrega: </b> ${val.fecha_entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 11
// queryAboutTable11.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable11.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestsRejectedIn2009();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.code_request}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Fecha del pedido: </b> ${val.date_request}</p>
//                         <p><b>Fecha esperada: </b> ${val.date_wait}</p>
//                         <p><b>Fecha entrega: </b> ${val.date_delivery}</p>
//                         <p><b>Estado: </b> ${val.status}</p>
//                         <p><b>Comentario: </b> ${val.comment}</p>
//                         <p><b>Código del cliente: </b> ${val.code_client}</p>
//                         <p><b>ID del cliente: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 12
// queryAboutTable12.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable12.children
//     if(!report__container.innerHTML){
//         let data = await getAllRequestOfJanuary();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código del pedido: </b>${val.code_request}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Fecha del pedido: </b> ${val.date_request}</p>
//                         <p><b>Fecha esperada: </b> ${val.date_wait}</p>
//                         <p><b>Fecha entrega: </b> ${val.date_delivery}</p>
//                         <p><b>Estado: </b> ${val.status}</p>
//                         <p><b>Comentario: </b> ${val.comment  || "No aplica"}</p>
//                         <p><b>Código del cliente: </b> ${val.code_client}</p>
//                         <p><b>ID del cliente: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 13
// queryAboutTable13.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable13.children
//     if(!report__container.innerHTML){
//         let data = await getAllPaypalPayments2008();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>ID del pago: </b>${val.id}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Pago realizado por: </b> ${val.payment}</p>
//                         <p><b>ID transacción: </b> ${val.id_transaction}</p>
//                         <p><b>Fecha del pago: </b> ${val.date_payment}</p>
//                         <p><b>Total: </b> ${val.total}</p>
//                         <p><b>Comentario: </b> ${val.comment}</p>
//                         <p><b>Código del cliente: </b> ${val.code_client}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 14
// queryAboutTable14.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable14.children
//     if(!report__container.innerHTML){
//         let data = await getAllPaymentTypes();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">

//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p>${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 15
// queryAboutTable15.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable15.children
//     if(!report__container.innerHTML){
//         let data = await getAllProductosGamaOrnamentals();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo del producto: </b> ${val.code_product}</p>
//                         <p><b>Gama: </b> ${val.gama}</p>
//                         <p><b>Medida: </b> ${val.dimension}</p>
//                         <p><b>Proveedor: </b> ${val.provider}</p>
//                         <p><b>Descripción: </b> ${val.description  || "No registrado"}</p>
//                         <p><b>Cantidad: </b> ${val.stock}</p>
//                         <p><b>Precio de venta: </b> ${val.price_sale}</p>
//                         <p><b>Precio de proveedor: </b> ${val.price_provider}</p>
//                         <p><b>ID: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 16
// queryAboutTable16.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable16.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsFromSpainAndRepresentative11Or30();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo del cliente: </b> ${val.client_code}</p>
//                         <p><b>Nombre de contacto: </b> ${val.contact_name}</p>
//                         <p><b>Apellido de contacto: </b> ${val.contact_lastname}</p>
//                         <p><b>Teléfono: </b> ${val.phone}</p>
//                         <p><b>Dirección 1: </b> ${val.address1}</p>
//                         <p><b>Dirección 2: </b> ${val.address2  || "No registrado"} </p>
//                         <p><b>Ciudad: </b> ${val.city}</p>
//                         <p><b>Región: </b> ${val.region}</p>
//                         <p><b>País: </b> ${val.country}</p>
//                         <p><b>Código postal: </b> ${val.postal_code}</p>
//                         <p><b>Código del representante: </b> ${val.code_employee_sales_manager}</p>
//                         <p><b>Límite de crédito: </b> ${val.limit_credit}</p>
//                         <p><b>ID: </b> ${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // CONSULTAS MULTITABLA

// // EJERCICIO 1
// queryMultitable1.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable1.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente</b>: ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //EJERCICIO 2
// queryMultitable2.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable2.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsMadePaymentsAndNameRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 3
// queryMultitable3.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable3.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientNOTMadePaymentsAndNameRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })
// // EJERCICIO 4
// queryMultitable4.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable4.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsThatMadePaymentsAndOfficeRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                         <p><b>Ciudad oficina: </b> ${val.ciudad_oficina}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 5
// queryMultitable5.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable5.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsThatNotMadePaymentsAndOfficeRepresentative();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Cliente:</b> ${val.nombre_cliente}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre: </b> ${val.nombre_representante}</p>
//                         <p><b>Apellido: </b> ${val.apellidos_representante}</p>
//                         <p><b>Ciudad oficina: </b> ${val.ciudad_oficina}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 6
// queryMultitable6.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable6.children
//     if(!report__container.innerHTML){
//         let data = await getAllAdressOfficesThatHaveClientsFuenlabrada();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Código de oficina:</b> ${val.code_office}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Dirección 1: </b> ${val.address1}</p>
//                         <p><b>Dirección 2: </b> ${val.address2}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 7
// queryMultitable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable7.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsNameAndWithRepresentativesCityOffice();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Representante: </b> ${val.employee_sales_manager}</p>
//                         <p><b>Ciudad de la oficina 2: </b> ${val.office_city}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 8

// queryMultitable8.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable8.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesAndSupervisors();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Empleado: </b>${val.nombre_empleado}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del jefe: </b> ${val.nombre_jefe}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


// // EJERCICIO 9

// queryMultitable9.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable9.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div><b>Empleado: </b>${val.nombre_empleado}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Jefe: </b> ${val.nombre_jefe}</p>
//                         <p><b>Jefe del jefe: </b> ${val.nombre_jefe_jefe}</p>

                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 10

// queryMultitable10.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable10.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsNotDeliveredOnTime();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p>${val}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // EJERCICIO 11

// queryMultitable11.addEventListener("click", async(e)=>{
//     let [,report__container] = queryMultitable11.children
//     if(!report__container.innerHTML){
//         let data = await getAllDifferentProductGamasOfClient();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//             <div class="report__card">
//             <div class="card__title">
//                 <div>${val.client_name}</div>
//             </div>
//             <div class="card__body">
//                 <div class="body__marck">
//                     <p>${val.gamas}</p>

                    
//                 </div>
//             </div>
//         </div>
//         `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//             <div class="report__card">
//             <div class="card__title">
//                 <div>${val.client_name}</div>
//             </div>
//             <div class="card__body">
//                 <div class="body__marck">
//                     <p>${val.gamas}</p>

                    
//                 </div>
//             </div>
//         </div>
//         `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`

                <my-details logic="client_1" text="1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
                <my-details logic="client_2" text="2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas. "></my-details>
                <my-details logic="client_3" text="3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas. "></my-details>
                <my-details logic="client_4" text="4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_5" text="5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_6" text="6. Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
                <my-details logic="client_6m" text="6. Lista la dirección de las oficinas que tengan clientes en 'Fuenlabrada'."></my-details>
                <my-details logic="client_7" text="7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_10" text="10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido."></my-details>
                <my-details logic="client_16" text="16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>

            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`

                <my-details logic="employee_3" text="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
                <my-details logic="employee_4" text="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
                <my-details logic="employee_5" text="5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>
                <my-details logic="employee_8" text="8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes."></my-details>
                <my-details logic="employee_9" text="9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe."></my-details>

            `;
        }

    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)