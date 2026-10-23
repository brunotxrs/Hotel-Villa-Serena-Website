import  * as ele  from '../js/elementsDOM.js';

function actionBtnReserva(){

    ele.btnReserveH.addEventListener('click', () => {
        // Remove a classe caso já exista (para permitir clicar várias vezes)
        ele.btnReserveH.classList.remove('animando');
        
        // O "Truque do Reflow" do JavaScript. 
        // O void faz o navegador "piscar" e perceber que a classe foi removida, 
        // permitindo que a animação rode novamente do zero.
        void ele.btnReserveH.offsetWidth; 
        
        // Adiciona a classe para disparar a animação
        ele.btnReserveH.classList.add('animando');
    

    })
}


function actionBtnMenu(){

    ele.btnMenu.addEventListener('click', () => {
        // Verifica se o ícone atual é o de "menu" (fa-bars)
        const isMenu = ele.iconMenu.classList.contains('fa-bars');
    

        // Adiciona a classe que gira o ícone no CSS
        ele.iconMenu.classList.add('icon-active');
    
        // Espera meio segundo (tempo da transição) e troca o ícone
        setTimeout(() => {
            if (isMenu) {
                // Muda para o X
                ele.iconMenu.classList.remove('fa-bars', 'apply-branco');
                ele.iconMenu.classList.add('fa-xmark', 'apply-dourado-elegante');
                document.getElementById('nav-bar-header').classList.add('show-sidebar');
           
            } else {
                
                // Volta para o menu
                ele.iconMenu.classList.remove('fa-xmark', 'apply-dourado-elegante');
                ele.iconMenu.classList.add('fa-bars', 'apply-branco');
                document.getElementById('nav-bar-header').classList.remove('show-sidebar')
           
            }

            // Remove a classe de rotação para que ele fique reto de novo
            ele.iconMenu.classList.remove('icon-active');
        
        }, 200); // 200ms é metade do tempo da transição CSS (0.4s)
    
    });
}

function headerFixed(){

    const sticky = ele.headerWebsite.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > sticky) {
            ele.headerWebsite.classList.add("sticky");
        } else {
            ele.headerWebsite.classList.remove("sticky");
        }
    });


}

export function actionsHeader(){
    headerFixed();
    actionBtnMenu();
    actionBtnReserva();
}
