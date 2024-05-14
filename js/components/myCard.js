import { 
    getAllClientsFromSpainAndRepresentative11Or30, 
    getAllClientsFromSpain,
    getAllClientsAndRepresentative,
    getAllClientsMadePaymentsAndNameRepresentative,
    getAllClientNOTMadePaymentsAndNameRepresentative,
    getAllClientsThatMadePaymentsAndOfficeRepresentative,
    getAllClientsThatNotMadePaymentsAndOfficeRepresentative,
    getAllAdressOfficesThatHaveClientsFuenlabrada,
    getAllClientsNameAndWithRepresentativesCityOffice,
    getAllClientsNotDeliveredOnTime,

} from "../modules/clients.js";

import {
    getAllEmployeesWithBossAndCodeSeven,
    getAllInformationBoss,
    getAllNotSalesRepresentative,
    getAllEmployeesAndSupervisors,
    getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors

} from "../modules/employees.js";

import {
    getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil
} from "../modules/offices.js"

import {
    getAllClientsMadePayment2008, 
    getAllPaymentTypes, 
    getAllPaypalPayments2008
    
} from "../modules/payments.js"
import { getAllProductosGamaOrnamentals } from "../modules/products.js";
import { getAllDifferentProductGamasOfClient } from "../modules/request_details.js";
import { getAllRequestOfJanuary, getAllRequestsDelivered2DaysAgo, getAllRequestsDeliveredLate, getAllRequestsRejectedIn2009, statusRequests } from "../modules/requests.js";

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }

    async getAllClientsFromSpainAndRepresentative11Or30Design(){
        let data = await getAllClientsFromSpainAndRepresentative11Or30();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
                            <p><b>Total a prestar: </b>${money}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllClientsFromSpainDesign(){
        let data = await getAllClientsFromSpain();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                             <p><b>Nombre: </b> ${val}</p>
                        </div>
                     </div>
                </div>
            `;
        });
    }

    

    async getAllClientsAndRepresentativeDesign(){
        let data = await getAllClientsAndRepresentative();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
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
    }


    async getAllClientsMadePaymentsAndNameRepresentativeDesign(){
        let data = await getAllClientsMadePaymentsAndNameRepresentative();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
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
    }

    
    async getAllClientNOTMadePaymentsAndNameRepresentativeDesign(){
        let data = await getAllClientNOTMadePaymentsAndNameRepresentative();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
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
    }

    async getAllClientsThatMadePaymentsAndOfficeRepresentativeDesign(){
        let data = await getAllClientsThatMadePaymentsAndOfficeRepresentative();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
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
    }

    async getAllClientsThatNotMadePaymentsAndOfficeRepresentativeDesign(){
        let data = await getAllClientsThatNotMadePaymentsAndOfficeRepresentative();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
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
    }

    async getAllAdressOfficesThatHaveClientsFuenlabradaDesign(){
        let data = await getAllAdressOfficesThatHaveClientsFuenlabrada();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div><b>Código de oficina:</b> ${val.code_office}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Dirección 1: </b> ${val.address1}</p>
                            <p><b>Dirección 2: </b> ${val.address2}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllClientsNameAndWithRepresentativesCityOfficeDesign(){
        let data = await getAllClientsNameAndWithRepresentativesCityOffice();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Representante: </b> ${val.employee_sales_manager}</p>
                            <p><b>Ciudad de la oficina: </b> ${val.office_city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllClientsNotDeliveredOnTimeDesign(){
        let data = await getAllClientsNotDeliveredOnTime();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p>${val}</p>
                        </div>
                    </div>
                </div>
                
            `;
        });
    }

    async getAllClientsThayNOTmadeAnyPaymentDesign(){
        let data = await getAllClientsThayNOTmadeAnyPayment ();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p>${val}</p>
                        </div>
                    </div>
                </div>
                
            `;
        });
    }

    // ------------------------------------------- EMPLOYEES -------------------------------------------------------

    async getAllEmployeesWithBossAndCodeSevenDesign(){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
    }    

    async getAllInformationBossDesign(){
        let data = await getAllInformationBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
    }  

    async getAllNotSalesRepresentativeDesign(){
        let data = await getAllNotSalesRepresentative();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
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
    } 

    async getAllEmployeesAndSupervisorsDesign(){
        let data = await getAllEmployeesAndSupervisors();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div><b>Empleado: </b>${val.nombre_empleado}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del jefe: </b> ${val.nombre_jefe}</p>
                        </div>
                    </div>
                </div>
                
            `;
        });
    } 


    async getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisorsDesign(){
        let data = await getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisors();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div><b>Empleado: </b>${val.nombre_empleado}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Jefe: </b> ${val.nombre_jefe}</p>
                            <p><b>Jefe del jefe: </b> ${val.nombre_jefe_jefe}</p>             
                        </div>
                    </div>
                </div>
                
            `;
        });
    }

    // ------------------------------- OFFICES -------------------------------

    async getAllCodeAndCityOfficesDesign(){
        let data = await getAllCodeAndCityOffices();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
    }

    async getAllOfficesFromSpainCityAndMovilDesign(){
        let data = await getAllOfficesFromSpainCityAndMovil();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
    } 


    // -------------------------------- PAYMENTS --------------------------------

    async getAllClientsMadePayment2008Design(){
        let data = await getAllClientsMadePayment2008();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo cliente: </b> ${val}</p>
                        </div>
                    </div>
                </div>
                
            `;
        });
    } 

    async getAllClientsMadePayment2008Design(){
        let data = await getAllPaypalPayments2008();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
    } 

    async getAllPaymentTypesDesign(){
        let data = await getAllPaymentTypes();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__car">
                    <div class="card__body">
                        <div class="body__marck">
                            <p>${val}</p>
                        </div>
                    </div>
                </div>
                
            `;
        });
    } 

    // ------------------------------ PRODUCTS ------------------------------

    async getAllProductosGamaOrnamentalsDesign(){
        let data = await getAllProductosGamaOrnamentals();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
    } 

    //------------------------------- REQUESTS DETAILS -------------------------------

    async getAllDifferentProductGamasOfClientDesign(){
        let data = await getAllDifferentProductGamasOfClient();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p>${val.gamas}</p>    

                        </div>
                    </div>
                </div>
            `

        });
    } 

    // ------------------------------- REQUESTS -------------------------------

    async statusRequestsDesign(){
        let data = await statusRequests();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Estado: </b>${val}</p>
                        </div>
                    </div>
                </div>
            `

        });
    } 

    async getAllRequestsDeliveredLateDesign(){
        let data = await getAllRequestsDeliveredLate();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
            `

        });
    } 

    async getAllRequestsDelivered2DaysAgoDesign(){
        let data = await getAllRequestsDelivered2DaysAgo();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
            `

        });
    } 

    async getAllRequestsRejectedIn2009Design(){
        let data = await getAllRequestsRejectedIn2009();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
            `

        });
    }

    async getAllRequestOfJanuaryDesign(){
        let data = await getAllRequestOfJanuary();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
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
            `

        });
    }


    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_1") this.getAllClientsAndRepresentativeDesign()
        if(name=="logic" && now=="client_1ce") this.getAllClientsThayNOTmadeAnyPaymentDesignDesign()
        if(name=="logic" && now=="client_2") this.getAllClientsMadePaymentsAndNameRepresentativeDesign()
        if(name=="logic" && now=="client_3") this.getAllClientNOTMadePaymentsAndNameRepresentativeDesign()
        if(name=="logic" && now=="client_4") this.getAllClientsThatMadePaymentsAndOfficeRepresentativeDesign()
        if(name=="logic" && now=="client_5") this.getAllClientsThatNotMadePaymentsAndOfficeRepresentativeDesign()
        if(name=="logic" && now=="client_6") this.getAllClientsFromSpainDesign()
        if(name=="logic" && now=="client_6m") this.getAllAdressOfficesThatHaveClientsFuenlabradaDesign()
        if(name=="logic" && now=="client_7") this.getAllClientsNameAndWithRepresentativesCityOfficeDesign()
        if(name=="logic" && now=="client_10") this.getAllClientsNotDeliveredOnTimeDesign()
        if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()

        if(name=="logic" && now=="employee_3") this.getAllEmployeesWithBossAndCodeSevenDesign()
        if(name=="logic" && now=="employee_4") this.getAllInformationBossDesign()
        if(name=="logic" && now=="employee_5") this.getAllNotSalesRepresentativeDesign()
        if(name=="logic" && now=="employee_8") this.getAllEmployeesAndSupervisorsDesign()
        if(name=="logic" && now=="employee_9") this.getAllEmployeesAndSupervisorsAndSupervisorsOfSupervisorsDesign()

        if(name=="logic" && now=="office_1") this.getAllCodeAndCityOfficesDesign()
        if(name=="logic" && now=="office_2") this.getAllOfficesFromSpainCityAndMovilDesign()

        if(name=="logic" && now=="payment_8") this.getAllClientsMadePayment2008Design()
        if(name=="logic" && now=="payment_13") this.getAllClientsMadePayment2008Design()
        if(name=="logic" && now=="payment_14") this.getAllPaymentTypesDesign()

        if(name=="logic" && now=="product_15") this.getAllProductosGamaOrnamentalsDesign()

        if(name=="logic" && now=="request_detail_11") this.getAllDifferentProductGamasOfClientDesign()

        if(name=="logic" && now=="request_7") this.statusRequestsDesign()
        if(name=="logic" && now=="request_9") this.getAllRequestsDeliveredLateDesign()
        if(name=="logic" && now=="request_10") this.getAllRequestsDelivered2DaysAgoDesign()
        if(name=="logic" && now=="request_11") this.getAllRequestsRejectedIn2009Design()
        if(name=="logic" && now=="request_12") this.getAllRequestOfJanuaryDesign()


        
    }
}