// Aplicación (app.js)
import YogaPostureService from'./services/yogaPostureService.mjs';
import YogaPosesView from './views/yogaPosturesView.js';
import YogaPostureController from './controllers/yogaPostureController.js';
//import YogaMorphemesView from './views/yogaMorphemesView.js';

const yogaPostureModel = new YogaPostureService();
const yogaPostureView = new YogaPosesView();
const yogaPostureController = new YogaPostureController(yogaPostureModel, yogaPostureView);
//const yogaMorphemesView = new YogaMorphemesView();

//const morphemeModel = new YogaPostureService();
//const morphemeView = new YogaPosesView();
//const morphemeController = new YogaPostureController(morphemeModel, morphemeView);
