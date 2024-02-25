// Aplicación (app.js)
import YogaPostureService from './services/yogaPostureService.js';
import YogaPosesView from './views/yogaPostureView.js';
import YogaPostureController from './controllers/yogaPostureController.js';
import YogaUploadMorphemesView from './views/yogaUploadMorphemeView.js';

const yogaPostureModel = new YogaPostureService();
const yogaPostureView = new YogaPosesView();
const yogaPostureController = new YogaPostureController(yogaPostureModel, yogaPostureView);
const yogaMorphemesView = new YogaUploadMorphemesView();

const drawerButton = document.getElementById('drawerButton');
drawerButton.addEventListener('click', (event) => {
    toggleDrawer();
});

const closeButton = document.getElementById('closeDrawerButton');
closeButton.addEventListener('click', (event) => {
  toggleDrawer();
});

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


//Pose Overlay
document.getElementById('closePoseOverlay').addEventListener('click', function() {
  document.getElementById('PoseOverlay').classList.remove('show');
});

// Este código supone que tienes un botón u otro elemento que al hacer clic muestra el overlay.
// Deberías tener algo como esto en tu HTML: <button id="showOverlay">Mostrar Overlay</button>
document.getElementById('showPoseOverlay').addEventListener('click', function() {
  document.getElementById('PoseOverlay').classList.add('show');
  toggleDrawer();
});

// Asegúrate de prevenir el comportamiento por defecto del formulario si no deseas que la página se recargue al enviar.
document.getElementById('poseForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Aquí puedes añadir el código para manejar la lógica de envío de tu formulario.
  console.log('Formulario enviado');
});


function toggleDrawer() {
    const drawer = document.querySelector('.drawer');

    if (drawer.style.left === '0px') {
      drawer.style.left = '-350px';
    } else {
      drawer.style.left = '0';
    }
  }

//const yogaMorphemesView = new YogaMorphemesView();

//const morphemeModel = new YogaPostureService();
//const morphemeView = new YogaPosesView();
//const morphemeController = new YogaPostureController(morphemeModel, morphemeView);
