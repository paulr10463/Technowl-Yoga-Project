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
            this._model.addMorpheme(morphemeValues);
            console.log(morphemeValues);
            this._posesModel.addMorphemeToPoses(morphemeValues);
            this._view.displayMorphemeAdded();
            this._view.closeMorphemeOverlay();
        }
        catch(error){
            this._view.displayMorphemeAddedFailed(error.message);
        }
    }

}
