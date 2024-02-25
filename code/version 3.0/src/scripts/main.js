// Aplicación (app.js)
import YogaPostureService from './services/yogaPostureService.js';
import YogaPosesView from './views/yogaPostureView.js';
import YogaPostureController from './controllers/yogaPostureController.js';
import { toggleDrawer } from './utils.js';
import YogaUploadMorphemesView from './views/yogaMorphemeView.js';
import YogaMorphemeService from './services/yogaMorphemeService.js';
import YogaMorphemeController from './controllers/yogaMorphemeController.js';

const yogaPostureModel = new YogaPostureService();
const yogaPostureView = new YogaPosesView();
const yogaMorphemesView = new YogaUploadMorphemesView();
const yogaMorphemeService = new YogaMorphemeService();

const yogaPostureController = new YogaPostureController(yogaPostureModel, yogaMorphemeService, yogaPostureView);
const yogaMorphemeController = new YogaMorphemeController(yogaMorphemeService, yogaPostureModel, yogaMorphemesView);


const drawerButton = document.getElementById('drawerButton');
drawerButton.addEventListener('click', (event) => {
    toggleDrawer();
});

const closeButton = document.getElementById('closeDrawerButton');
closeButton.addEventListener('click', (event) => {
  toggleDrawer();
});




