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
    getAllClientsNotDeliveredOnTime
} from "../modules/clients.js";

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
        
    }
}