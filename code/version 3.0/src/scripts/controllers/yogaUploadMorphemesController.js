export default class YogaPostureController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
        this._view.addYogaPostureHandler(this.searchYogaPosturesTranslations.bind(this));
    }

    saveYogaPostureMorphemes(morphemeValues) {
        this._model.saveYogaPostureMorphemes(morphemeValues);
    }

}
