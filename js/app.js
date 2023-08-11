import {
    cambiarInfomarcion,
    cambiarPortafolio,
    expandirMenu,
} from "./funciones.js";
import {
    navOpcMii,
    navOpcSer,
    navOpcPor,
    navOpcCon,
    btnAll,
    btnWeb,
    btnBra,
    btnDes,
    menu,
    header
} from "./variables.js";

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


// document.addEventListener('scroll', () => {

//     const experience = document.querySelector('#Experience').offsetTop;
//     var scrollActual = window.pageYOffset + window.innerHeight;
//     if (scrollActual > experience) {
//         setTimeout(() => {
//             header.classList.add('headerScrollAct');
//         }, 100);
//     }
//     if (scrollActual < experience) {
//         setTimeout(() => {
//             header.classList.remove('headerScrollAct');
//         }, 100);
//     }
// });

document.addEventListener('scroll', () => {
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


