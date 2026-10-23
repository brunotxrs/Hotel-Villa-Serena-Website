export const headerWebsite  = document.getElementById('header');
export const btnMenu = document.getElementById('btn-menu');
export const iconMenu = document.getElementById('icon-menu');
export const btnReserveH = document.getElementById('btn-reserve-header');
export const btnTop = document.getElementById('btn-top');




export function elementsInDom(){
    if(
        !headerWebsite ||
        !btnMenu ||
        !iconMenu ||
        !btnReserveH ||
        !btnTop
    ) return;
}