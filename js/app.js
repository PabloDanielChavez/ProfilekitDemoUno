const body = document.querySelector("body");

const navOpcMii = document.querySelector("#navOpcMii");
const navOpcSer = document.querySelector("#navOpcSer");
const navOpcPor = document.querySelector("#navOpcPor");
const navOpcCon = document.querySelector("#navOpcCon");

const informacion = document.querySelector("#informacion");

const informacionSobremi = document.querySelector("#informacionSobremi");
const informacionServicio = document.querySelector("#informacionServicio");

navOpcMii.addEventListener("click", () => {
    body.classList.add('scroll');
    informacionSobremi.classList.remove('ocultar');
    informacion.classList.remove('right100');
    informacion.classList.remove('right200');
    informacion.classList.remove('right300');
    navOpcMii.classList.add('activo');
    navOpcSer.classList.remove('activo');
    navOpcMii.setAttribute('disabled', '');
    navOpcSer.setAttribute('disabled', '');
    navOpcPor.setAttribute('disabled', '');
    navOpcCon.setAttribute('disabled', '');
    setTimeout(() => {
        setTimeout(() => {
            navOpcMii.removeAttribute('disabled', '');
            navOpcSer.removeAttribute('disabled', '');
            navOpcPor.removeAttribute('disabled', '');
            navOpcCon.removeAttribute('disabled', '');
        }, 1000);
        informacionServicio.classList.add('ocultar');
        body.classList.remove('scroll');
    }, 700);
});

navOpcSer.addEventListener("click", () => {
    body.classList.add('scroll');
    informacionServicio.classList.remove('ocultar');
    informacion.classList.add('right100');
    informacion.classList.remove('right200');
    informacion.classList.remove('right300');
    navOpcMii.classList.remove('activo');
    navOpcSer.classList.add('activo');

    navOpcMii.setAttribute('disabled', '');
    navOpcSer.setAttribute('disabled', '');
    setTimeout(() => {
        setTimeout(() => {
            navOpcMii.removeAttribute('disabled', '');
            navOpcSer.removeAttribute('disabled', '');
            navOpcPor.removeAttribute('disabled', '');
            navOpcCon.removeAttribute('disabled', '');
        }, 1000);
        informacionSobremi.classList.add('ocultar');
        body.classList.remove('scroll');
    }, 700);
});