import { cambiarInfomarcion, cambiarPortafolio, expandirMenu } from "./funciones.js";
import {
    navOpcMii,
    navOpcSer,
    navOpcPor,
    navOpcCon,
    btnAll,
    btnWeb,
    btnBra,
    btnDes,
    menu
} from "./variables.js";

menu.addEventListener('click', () => expandirMenu());

navOpcMii.addEventListener('click', () => cambiarInfomarcion("about"));
navOpcSer.addEventListener('click', () => cambiarInfomarcion("servicio"));
navOpcPor.addEventListener('click', () => cambiarInfomarcion("portfolio"));
navOpcCon.addEventListener('click', () => cambiarInfomarcion("contact"));

btnAll.addEventListener('click', () => cambiarPortafolio("all"));
btnWeb.addEventListener('click', () => cambiarPortafolio("web"));
btnBra.addEventListener('click', () => cambiarPortafolio("bra"));
btnDes.addEventListener('click', () => cambiarPortafolio("des"));