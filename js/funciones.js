import {
    body,
    navOpcMii,
    navOpcSer,
    navOpcPor,
    navOpcCon,
    informacion,
    informacionSobremi,
    informacionServicio,
    informacionPortafolio,
    btnWeb,
    btnAll,
    btnBra,
    btnDes,
    article1,
    article2,
    article3,
    article4,
    article5,
    article6,
    article7,
    article8,
    article9
} from "./variables.js";


export var infoEstado = "about";


export function cambiarInfomarcion(tipo) {
    if (tipo === "about" && infoEstado !== "about") {
        modificarClaseInformacion(navOpcMii, "right0", informacionSobremi);
        infoEstado = "about";
        body.classList.add('scroll');;
    }
    else if (tipo === "servicio" && infoEstado !== "servicio") {
        modificarClaseInformacion(navOpcSer, "right100", informacionServicio);
        infoEstado = "servicio";
        body.classList.add('scroll');;

    }
    else if (tipo === "portfolio" && infoEstado !== "portfolio") {
        modificarClaseInformacion(navOpcPor, "right200", informacionPortafolio);
        infoEstado = "portfolio";
        body.classList.add('scroll');;

    }
    else if (tipo === "contact" && infoEstado !== "contact") {
        // modificarClaseInformacion(navOpcCon, "right300", "");
        // infoEstado = "contact";
        // body.classList.add('scroll');;

    }
}

export function modificarClaseInformacion(clase, right, infoSeccion) {
    infoSeccion.classList.remove('ocultar');;
    navOpcMii.setAttribute('disabled', '');;
    navOpcSer.setAttribute('disabled', '');;
    navOpcPor.setAttribute('disabled', '');;
    navOpcCon.setAttribute('disabled', '');;
    navOpcMii.classList.remove('activo');;
    navOpcSer.classList.remove('activo');;
    navOpcPor.classList.remove('activo');;
    navOpcCon.classList.remove('activo');;
    informacion.classList.remove('right100');;
    informacion.classList.remove('right200');;
    informacion.classList.remove('right300');;
    clase.classList.add("activo");
    if (right !== "right0") {
        informacion.classList.add(right);
    }
    setTimeout(() => {
        if (infoSeccion.classList.value !== "informacionSobremi") {
            informacionSobremi.classList.add('ocultar');;
        } else if ((infoSeccion.classList.value !== "informacionServicio")) {
            informacionServicio.classList.add('ocultar');;
        }
    }, 700);
    setTimeout(() => {
        body.classList.remove('scroll');;
        navOpcMii.removeAttribute('disabled', '');;
        navOpcSer.removeAttribute('disabled', '');;
        navOpcPor.removeAttribute('disabled', '');;
        navOpcCon.removeAttribute('disabled', '');;
    }, 700);
}

export function cambiarPortafolio(tipo) {
    if (tipo === "all") {
        modificarClasePortafolio("all");

    } else if (tipo === "web") {
        modificarClasePortafolio("web");

    } else if (tipo === "bra") {
        modificarClasePortafolio("branding");

    } else if (tipo === "des") {
        modificarClasePortafolio("design");
    }
}


export function modificarClasePortafolio(clase) {
    agregarDisp();
    removerBloc();


    setTimeout(() => {
        article1.classList.remove("all", "web", "branding", "design");
        article2.classList.remove("all", "web", "branding", "design");
        article3.classList.remove("all", "web", "branding", "design");
        article4.classList.remove("all", "web", "branding", "design");
        article5.classList.remove("all", "web", "branding", "design");
        article6.classList.remove("all", "web", "branding", "design");
        article7.classList.remove("all", "web", "branding", "design");
        article8.classList.remove("all", "web", "branding", "design");
        article9.classList.remove("all", "web", "branding", "design");
        article1.classList.add(clase);
        article2.classList.add(clase);
        article3.classList.add(clase);
        article4.classList.add(clase);
        article5.classList.add(clase);
        article6.classList.add(clase);
        article7.classList.add(clase);
        article8.classList.add(clase);
        article9.classList.add(clase);
        setTimeout(() => {
            if (clase === "all") {
                removerDisp();
                agregarBloc();
            } else if (clase === "web") {
                agregarBloc();
            } else if (clase === "branding") {
                agregarBloc();
            } else if (clase === "design") {
                agregarBloc();
            }
        }, 100);
    }, 200);
}

function removerDisp() {
    article1.classList.remove('disp');
    article2.classList.remove('disp');
    article3.classList.remove('disp');
    article4.classList.remove('disp');
    article5.classList.remove('disp');
    article6.classList.remove('disp');
    article7.classList.remove('disp');
    article8.classList.remove('disp');
    article9.classList.remove('disp');
}

function agregarDisp() {
    article1.classList.add('disp');
    article2.classList.add('disp');
    article3.classList.add('disp');
    article4.classList.add('disp');
    article5.classList.add('disp');
    article6.classList.add('disp');
    article7.classList.add('disp');
    article8.classList.add('disp');
    article9.classList.add('disp');
}

function removerBloc() {
    article1.classList.remove('bloc');
    article2.classList.remove('bloc');
    article3.classList.remove('bloc');
    article4.classList.remove('bloc');
    article5.classList.remove('bloc');
    article6.classList.remove('bloc');
    article7.classList.remove('bloc');
    article8.classList.remove('bloc');
    article9.classList.remove('bloc');
}

function agregarBloc() {
    article1.classList.add('bloc');
    article2.classList.add('bloc');
    article3.classList.add('bloc');
    article4.classList.add('bloc');
    article5.classList.add('bloc');
    article6.classList.add('bloc');
    article7.classList.add('bloc');
    article8.classList.add('bloc');
    article9.classList.add('bloc');
}