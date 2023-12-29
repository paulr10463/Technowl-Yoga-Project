export default class YogaPostureController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.addYogaPostureHandler(this.searchYogaPosturesTranslations.bind(this));
    }

    searchYogaPosturesTranslations(postureNameToSearch){
        const postureFound = this.model.getPostureByName(postureNameToSearch)
        if(postureFound){
            this.view.displayPostureTranslations(postureFound);
            const morphemesList = postureFound.getMorphemesByPosture(this.model.getMorphemes())
            if (morphemesList){
                this.view.displayPostureMorphemes(morphemesList);
            }
        }else{
            const result = this.model.getPosturesBySimilarNames(postureNameToSearch, 2);
            console.log(result);
            if(result.length > 0){  
                this.view.displayPosturesSuggestions(result);
            }else{
                this.view.displayPostureNotFound();
            }
        }
    }
}