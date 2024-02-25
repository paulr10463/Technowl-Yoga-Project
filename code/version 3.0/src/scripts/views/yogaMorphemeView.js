
import Swal from 'sweetalert2';
import { toggleDrawer } from '../utils.js';

export default class YogaMorphemesView {
    constructor() {
        this._yogaMorphemeSanskrit = document.getElementById('morphemInputSanscrito');
        this._yogaMorphemeSpanish = document.getElementById('morphemInputEspanol');
        this._yogaMorphemeEnglish = document.getElementById('morphemInputIngles');
        this._yogaMorphemeForm = document.getElementById('morfemaForm');
        this._submitButton = document.getElementById('submitMorphemButton');

        //Morphem Overlay
        document.getElementById('closeMorphemOverlay').addEventListener('click', function() {
            document.getElementById('MorphemOverlay').classList.remove('show');
        });
        
        // Este código supone que tienes un botón u otro elemento que al hacer clic muestra el overlay.
        // Deberías tener algo como esto en tu HTML: <button id="showOverlay">Mostrar Overlay</button>
        document.getElementById('showMorphemOverlay').addEventListener('click', function() {
            document.getElementById('MorphemOverlay').classList.add('show');
            toggleDrawer();
        });
    }
    
    cleanFormFields() {
        this._yogaMorphemeSanskrit.value = '';
        this._yogaMorphemeSpanish.value = '';
        this._yogaMorphemeEnglish.value = '';
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

    closeMorphemeOverlay() {
        document.getElementById('MorphemOverlay').classList.remove('show');
    }

    displayMorphemeAdded() {
        Swal.fire({
            icon: "success",
            title: "Morfema añadido!",
          });
    }

    displayMorphemeAddedFailed(errorMessage) {
        Swal.fire({
            icon: "error",
            title: "¡Oops! Parece que el morfema no se pudo agregar",
            text: errorMessage,
          });
    }

}