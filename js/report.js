import "./components/clock.js";
import {getAllCodeAndCityOffices,
    getAllOfficesFromSpainCityAndMovil} from "./modules/offices.js"

import {getAllEmployeesWithBossAndCodeSeven} from "./modules/employees.js"

const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllCodeAndCityOffices();
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

const queryAboutTable2 = document.querySelector("#queryAboutTable2");
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

const queryAboutTable3 = document.querySelector("#queryAboutTable3");
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
                        <p><b>Apellido: </b> ${val.apellidos}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})




