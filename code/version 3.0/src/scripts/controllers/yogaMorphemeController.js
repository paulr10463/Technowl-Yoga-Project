import Morpheme from '../models/morpheme.js';

export default class MorphemeController {
    constructor(model, modelPoses, view) {
        this._model = model;
        this._posesModel = modelPoses;
        this._view = view;
        this._view.addMorphemeHandler(this.addMorpheme.bind(this));
    }

    addMorpheme(morphemeValues) {
        try{
            const requiredFields = ['english', 'sanskrit', 'spanish'];
            for (const field of requiredFields) {
                if (!morphemeValues[field]) {
                    throw new Error(`El campo '${field}' es requerido y no puede estar vacío.`);
                }
            }   
            this._model.addMorpheme(morphemeValues);
            this._posesModel.addMorphemeToPoses(morphemeValues);
            this._view.displayMorphemeAdded();
            this._view.closeMorphemeOverlay();
            this._view.cleanFormFields();
        }
        catch(error){
            this._view.displayMorphemeAddedFailed(error.message);
        }
    }

}
