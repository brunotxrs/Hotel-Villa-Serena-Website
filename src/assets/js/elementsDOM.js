export const headerWebsite  = document.getElementById('header');
export const navBtn = document.querySelectorAll('.nav-btn')
export const btnMenu = document.getElementById('btn-menu');
export const iconMenu = document.getElementById('icon-menu');
export const btnReserveH = document.getElementById('btn-reserve-header');
export const btnTop = document.getElementById('btn-top');
export const btnMain = document.getElementById('more-info');
export const reserva = document.getElementById('reserva');
export const slides = document.querySelectorAll(".slide");
export const form = document.getElementById('reserva');

export function elementsInDom(){
    if(
        !headerWebsite ||
        !btnMenu ||
        !iconMenu ||
        !btnReserveH ||
        !btnMain ||
        !btnTop ||
        !reserva ||
        !navBtn ||
        !slides ||
        !form
    ) return;
}