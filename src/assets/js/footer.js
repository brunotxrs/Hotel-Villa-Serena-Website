import { form } from "./elementsDOM.js";

function formFooter(){
    
    if (form) {
        form.addEventListener('submit', (e) => {
    
            e.preventDefault(); // Impede o recarregamento
            console.log('Reserva solicitada com sucesso! Entraremos em contato em breve.');
            form.reset(); // Limpa os campos
        
        });
    }

}



export function actionsFooter(){
    formFooter();
}