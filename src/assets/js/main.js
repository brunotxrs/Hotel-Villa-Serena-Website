import { btnMain, slides } from "./elementsDOM.js";

function listenerBtnMain(){

    btnMain.addEventListener('click', () => {
        btnMain.classList.remove('animando-buttons');
    
        void btnMain.offsetWidth
        
        btnMain.classList.add('animando-buttons');
        
    })
}


let slideIndex = 0;


function carousel() {


  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "flex";

  setTimeout(carousel, 2000);
}


export function actionsMain(){
    carousel();

    listenerBtnMain();
}
