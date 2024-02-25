export default class YogaPostureController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
        this._view.addYogaPostureHandler(this.searchYogaPosturesTranslations.bind(this));
    }

    searchYogaPosturesTranslations(postureNameToSearch){
        const postureFound = this._model.getPostureByName(postureNameToSearch)
        if(postureFound){
            this._view.displayPostureTranslations(postureFound);
            const morphemesList = postureFound.getMorphemesByPosture(this._model.getMorphemes())
            if (morphemesList){
                this._view.displayPostureMorphemes(morphemesList);
            }
        }else{
            const result = this._model.getPosturesBySimilarNames(postureNameToSearch, 2);
            if(result.length > 0){  
                this._view.displayPosturesSuggestions(result);
            }else{
                this._view.displayPostureNotFound();
            }
        }
    }
}