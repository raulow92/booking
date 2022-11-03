const propiedades = [
    {
        nombre: "Casa de Campo", 
        descripcion: "Un lugar ideal para descansar de la ciudad.", 
        src: "assets/img/1.jpg", 
        cuartos: "3", 
        metros: "170", 
        tipo: "Casa", 
        precio: "$45.000",
    }, 
    {
        nombre: "Casa en la Playa", 
        descripcion: "Despierta escuchando al mar.", 
        src: "assets/img/2.jpg", 
        cuartos: "2", 
        metros: "130", 
        tipo: "Casa", 
        precio: "$50.000",
    }, 
    {
        nombre: "Casa en el centro", 
        descripcion: "Ten cerca todo lo que necesitas.", 
        src: "assets/img/3.jpg", 
        cuartos: "3", 
        metros: "90", 
        tipo: "Casa", 
        precio: "$30.000",
    }, 
    {
        nombre: "Casa Rodante", 
        descripcion: "Conviértete en un nómada del mundo sin salir de tu casa.", 
        src: "assets/img/4.jpg", 
        cuartos: "1", 
        metros: "15", 
        tipo: "Movil", 
        precio: "$35.000",
    }, 
    {
        nombre: "Departamento amplio", 
        descripcion: "Desde las alturas todo se ve mejor.", 
        src: "assets/img/5.jpg", 
        cuartos: "3",
        metros: "200", 
        tipo: "Departamento", 
        precio: "$50.000",
    }, 
    {
        nombre: "Mansión", 
        descripcion: "Vive una vida lujosa en la mansión de tus sueños.", 
        src: "assets/img/6.jpg", 
        cuartos: "5",
        metros: "500", 
        tipo: "Mansión", 
        precio: "$100.000",
    }, 
];

const seccionPropiedades = document.querySelector(".seccion__propiedades");
const cuartos = document.getElementById("cuartos");
const m2desde = document.getElementById("m2desde");
const m2hasta = document.getElementById("m2hasta");
const contador = document.querySelector(".total");

function totalPropiedades() {
    for (let propiedad of propiedades) {
        const template = `
        <div class="container__product">
            <div class="container__img">
                <img src="${propiedad.src}" alt="" class="img__product">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="container__details">
                <div class="details__up">
                    <h4 class="type">${propiedad.tipo}</h4>
                    <h2 class="title">${propiedad.nombre}</h2>
                    <p class="description">${propiedad.descripcion}</p>
                    <div class="container__info">
                        <h3 class="info__rooms">${propiedad.cuartos} cuartos</h3>
                        <i class="fa-solid fa-circle"></i>
                        <h3 class="info__m2">${propiedad.metros} m2</h3>
                    </div>
                    <div class="container__price">
                        <h3 class="price">${propiedad.precio}</h3>
                        <h4>por noche</h4>
                    </div>
                </div>
                <div class="details__down">
                    <button class="state">Ver disponibilidad<i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </div>
        `
    seccionPropiedades.innerHTML += template;
    }
}

totalPropiedades();

function buscarPropiedades() {
    let cuenta = 0;
    seccionPropiedades.innerHTML = ""

    for (let propiedad of propiedades) {
        if (cuartos.value === "" || m2desde.value === "" || m2hasta.value === "") {
            alert("Faltan campos por rellenar!");
            contador.innerHTML = "";
            totalPropiedades();
            break
        } else if (+cuartos.value === +propiedad.cuartos && (+m2desde.value <= +propiedad.metros && +m2hasta.value >= +propiedad.metros)) {
            
            cuenta++ 
            
            let template = `
            <div class="container__product">
                <div class="container__img">
                    <img src="${propiedad.src}" alt="" class="img__product">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="container__details">
                    <div class="details__up">
                        <h4 class="type">${propiedad.tipo}</h4>
                        <h2 class="title">${propiedad.nombre}</h2>
                        <p class="description">${propiedad.descripcion}</p>
                        <div class="container__info">
                            <h3 class="info__rooms">${propiedad.cuartos} cuartos</h3>
                            <i class="fa-solid fa-circle"></i>
                            <h3 class="info__m2">${propiedad.metros} m2</h3>
                        </div>
                        <div class="container__price">
                            <h3 class="price">${propiedad.precio}</h3>
                            <h4>por noche</h4>
                        </div>
                    </div>
                    <div class="details__down">
                        <button class="state">Ver disponibilidad<i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
            `
            seccionPropiedades.innerHTML += template;
            contador.innerHTML = `Total: ${cuenta}`;
        }
    }
}

function eliminarFiltro() {
    cuartos.value = "";
    m2desde.value = "";
    m2hasta.value = "";
    contador.innerHTML = "";
    seccionPropiedades.innerHTML = "";
    totalPropiedades();
}

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    buscarPropiedades()
})

let btnEliminar = document.querySelector(".eliminar");

btnEliminar.addEventListener("click", () => {
    eliminarFiltro()
})