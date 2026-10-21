export const btnMenu = document.getElementById('btn-menu');
export const iconMenu = document.getElementById('icon-menu');
export const btnReserveH = document.getElementById('btn-reserve-header');



export function elementsInDom(){
    if(
        !btnMenu ||
        !iconMenu ||
        !btnReserveH
    ) return;
}