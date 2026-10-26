import { elementsInDom, btnTop } from './elementsDOM.js';
import { actionsHeader } from './header.js'
import { actionsMain } from './main.js';
import { actionsFooter } from './footer.js'


function utilScrollToTop() {
 
    function verificarRolagem() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 20) {
            btnTop.classList.remove('hidden', );
        } else {
            btnTop.classList.add('hidden');
            btnTop.classList.remove('animando-btn-top')
        }
    }

    window.addEventListener("scroll", verificarRolagem);

    btnTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        btnTop.classList.add('animando-btn-top')

    });

    verificarRolagem();
}


export function initWebsite(){

    // valida se os elementos esta criados no DOM
    elementsInDom();

    //acoes de manipulação dos elementos do header
    actionsHeader();

    //acoes de manipulação dos elementos do main
    actionsMain();

    //acoes de manipulação dos elementos do footer
    actionsFooter();

    // função do botao topo
    utilScrollToTop();
}