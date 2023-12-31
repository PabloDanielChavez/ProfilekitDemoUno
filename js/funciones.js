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
    article9,
    informacionContacto,
    menu,
    header__H1,
    header,
    header__navegador,
    pantallaCarga,
    ScrollTop
} from "./variables.js";


export function cargarPagina() {
    aPantallaCarga("activo");

    var expand = "no";

    menu.addEventListener('click', () => {
        if (expand === "no") {
            expandirMenu('si');
            expand = 'si';
        } else if (expand === "si") {
            expandirMenu('no');
            expand = 'no';
        }
    });

    navOpcMii.addEventListener('click', () => cambiarInfomarcion("about"));
    navOpcSer.addEventListener('click', () => cambiarInfomarcion("servicio"));
    navOpcPor.addEventListener('click', () => cambiarInfomarcion("portfolio"));
    navOpcCon.addEventListener('click', () => cambiarInfomarcion("contact"));

    btnAll.addEventListener('click', () => cambiarPortafolio("all"));
    btnWeb.addEventListener('click', () => cambiarPortafolio("web"));
    btnBra.addEventListener('click', () => cambiarPortafolio("bra"));
    btnDes.addEventListener('click', () => cambiarPortafolio("des"));

    ScrollTop.addEventListener('click', () => scrollTop());

    document.addEventListener('scroll', () => {
        ScrollTop.classList.toggle('activo', window.scrollY > 10);
        header.classList.toggle('headerScrollAct', window.scrollY > 10);
        expandirMenu('no');
        expand = 'no';
        if (window.scrollY === 0) {
            navOpcMii.classList.add('colorLinks');
            navOpcSer.classList.add('colorLinks');
            navOpcPor.classList.add('colorLinks');
            navOpcCon.classList.add('colorLinks');
            navOpcMii.classList.remove('colorParrafo');
            navOpcSer.classList.remove('colorParrafo');
            navOpcPor.classList.remove('colorParrafo');
            navOpcCon.classList.remove('colorParrafo');
        } else {
            navOpcMii.classList.remove('colorLinks');
            navOpcSer.classList.remove('colorLinks');
            navOpcPor.classList.remove('colorLinks');
            navOpcCon.classList.remove('colorLinks');
            navOpcMii.classList.add('colorParrafo');
            navOpcSer.classList.add('colorParrafo');
            navOpcPor.classList.add('colorParrafo');
            navOpcCon.classList.add('colorParrafo');
        }
    });
}


export var infoEstado = "about";

export function cambiarInfomarcion(tipo) {
    navOpcMii.setAttribute('disabled', '');
    navOpcSer.setAttribute('disabled', '');
    navOpcPor.setAttribute('disabled', '');
    navOpcCon.setAttribute('disabled', '');
    var scrollActual = window.pageYOffset + window.innerHeight;
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
    llevarTop(scrollActual, tiempo());
    if (tipo === "about" && infoEstado !== "about") {
        modificarClaseInformacion(navOpcMii, "right0", informacionSobremi);
        infoEstado = "about";
        body.classList.add('scroll');
    }
    else if (tipo === "servicio" && infoEstado !== "servicio") {
        modificarClaseInformacion(navOpcSer, "right100", informacionServicio);
        infoEstado = "servicio";
        body.classList.add('scroll');

    }
    else if (tipo === "portfolio" && infoEstado !== "portfolio") {
        modificarClaseInformacion(navOpcPor, "right200", informacionPortafolio);
        infoEstado = "portfolio";
        body.classList.add('scroll');

    }
    else if (tipo === "contact" && infoEstado !== "contact") {
        modificarClaseInformacion(navOpcCon, "right300", informacionContacto);
        infoEstado = "contact";
        body.classList.add('scroll');

    }
}

export function tiempo() {
    var scrollActual = window.pageYOffset + window.innerHeight;
    if (scrollActual <= 1000) {
        return 300
    } else if (scrollActual <= 2000) {
        return 600
    } else if (scrollActual <= 3000) {
        return 1800
    } else if (scrollActual <= 4000) {
        return 1800
    } else if (scrollActual <= 5000) {
        return 1800
    } else if (scrollActual > 5000) {
        return 1800
    }
}

export function llevarTop(tiempo) {
    setTimeout(() => {
    }, tiempo);
}

export function modificarClaseInformacion(clase, right, infoSeccion) {
    setTimeout(() => {
        infoSeccion.classList.remove('ocultar');
        navOpcMii.classList.remove('linInf');
        navOpcSer.classList.remove('linInf');
        navOpcPor.classList.remove('linInf');
        navOpcCon.classList.remove('linInf');
        informacion.classList.remove('right100');
        informacion.classList.remove('right200');
        informacion.classList.remove('right300');
        clase.classList.add("linInf");
        if (right !== "right0") {
            informacion.classList.add(right);
        }
        setTimeout(() => {
            if (infoSeccion.classList.value !== "informacionSobremi") {
                informacionSobremi.classList.add('ocultar');
            }
            if ((infoSeccion.classList.value !== "informacionServicio")) {
                informacionServicio.classList.add('ocultar');
            }
            if ((infoSeccion.classList.value !== "informacionPortafolio")) {
                informacionPortafolio.classList.add('ocultar');
            }
            if ((infoSeccion.classList.value !== "informacionContacto")) {
                informacionContacto.classList.add('ocultar');
            }
        }, 700);
        setTimeout(() => {
            body.classList.remove('scroll');
            navOpcMii.removeAttribute('disabled', '');
            navOpcSer.removeAttribute('disabled', '');
            navOpcPor.removeAttribute('disabled', '');
            navOpcCon.removeAttribute('disabled', '');
        }, 700);
    }, 500);
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

export function expandirMenu(tipo) {
    if (tipo === "si") {
        menu.classList.add('activo');
        header__H1.classList.remove('colorTitulo');
        header__H1.classList.add('colorTituloTres');
        header.classList.add('activo');
        header__navegador.classList.add('activo');
        menu.textContent = 'close';
    } else if (tipo === "no") {
        menu.classList.remove('activo');
        header__H1.classList.remove('colorTituloTres');
        header__H1.classList.add('colorTitulo');
        header.classList.remove('activo');
        header__navegador.classList.remove('activo');
        menu.textContent = 'menu';
    }
}

export function scrollTop() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}



function aPantallaCarga(estado) {
    if (estado === "activo") {
        pantallaCarga.style.opacity = "0";
        pantallaCarga.style.zIndex = "0";
        body.classList.add('activo');
    } else {
        pantallaCarga.style.opacity = "1";
        pantallaCarga.style.zIndex = "4";
        body.classList.remove('activo');
    }
}