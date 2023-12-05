// Aplicación (app.js)
import YogaPostureService from'./services/yogaPostureService.mjs';
import YogaPosesView from './views/yogaPosturesView.js';
import YogaPostureController from './controllers/yogaPostureController.js';
//import YogaMorphemesView from './views/yogaMorphemesView.js';

const yogaPostureModel = new YogaPostureService();
const yogaPostureView = new YogaPosesView();
const yogaPostureController = new YogaPostureController(yogaPostureModel, yogaPostureView);


const drawerButton = document.getElementById('drawerButton');
drawerButton.addEventListener('click', (event) => {
    toggleDrawer();
});

function toggleDrawer() {
    const drawer = document.querySelector('.drawer');
    const mainContent = document.querySelector('.main-content');

    if (drawer.style.left === '0px') {
      drawer.style.left = '-350px';
      mainContent.style.marginLeft = '0';
    } else {
      drawer.style.left = '0';
      mainContent.style.marginLeft = '350px';
    }
  }

//const yogaMorphemesView = new YogaMorphemesView();

//const morphemeModel = new YogaPostureService();
//const morphemeView = new YogaPosesView();
//const morphemeController = new YogaPostureController(morphemeModel, morphemeView);
