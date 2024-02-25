
import Swal from 'sweetalert2';

export default class YogaUploadMorphemesView {
    constructor() {
        this._yogaMorphemeSanskrit = document.getElementById('morphemInputSanscrito');
        this._yogaMorphemeSpanish = document.getElementById('morphemInputEspanol');
        this._yogaMorphemeEnglish = document.getElementById('morphemInputIngles');
        this._yogaMorphemeForm = document.getElementById('morfemaForm');
        this._submitButton = document.getElementById('submitMorphemButton');
        // Asegúrate de prevenir el comportamiento por defecto del formulario si no deseas que la página se recargue al enviar.
        document.getElementById('morfemaForm').addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes añadir el código para manejar la lógica de envío de tu formulario.
            alert("Formulario enviado");
        });
    }

    addMorphemeHandler(callback) {
        this._submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const morphemeValues = {
                sanskrit: this._yogaMorphemeSanskrit.value,
                spanish: this._yogaMorphemeSpanish.value,
                english: this._yogaMorphemeEnglish.value
            };   
            callback(morphemeValues);
        });
    }
}