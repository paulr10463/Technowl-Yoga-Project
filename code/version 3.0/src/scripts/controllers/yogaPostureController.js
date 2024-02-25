import YogaPosture from "../models/yogaPosture.js";
import YogaPosturesView from "../views/yogaPostureView.js";
import {convertYoutubeLinkToEmbed, isImage} from "../utils.js";

export default class YogaPostureController {
    constructor(model, modelMorphemes, view) {
        this._model = model;
        this._modelMorphemes = modelMorphemes;
        this._view = view;
        this._view.searchPostureHandler(this.searchYogaPosturesTranslations.bind(this));
        this._view.addPostureHandler(this.addYogaPose.bind(this));
    }

    searchYogaPosturesTranslations(postureNameToSearch){
        const postureFound = this._model.getPostureByName(postureNameToSearch)
        if(postureFound){
            this._view.displayPostureTranslations(postureFound);
            const morphemesList = postureFound.getMorphemesByPosture(this._modelMorphemes.getMorphemes())
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
    
    addYogaPose(yogaPostureData){
        try{
            const requiredFields = ['english', 'sanskrit', 'spanish', 'image', 'url'];
            for (const field of requiredFields) {
                if (!yogaPostureData[field]) {
                    throw new Error(`El campo '${field}' es requerido y no puede estar vacío.`);
                }
            }
            if (!isImage(yogaPostureData.image.name)) {
                throw new Error("El campo 'image' debe ser una imagen válida.");
            }   
            const embedLink = convertYoutubeLinkToEmbed(yogaPostureData.url);
            yogaPostureData.url = embedLink
            this._model.addPose(yogaPostureData);
            this._view.displayPostureAdded();
            this._view.closePoseOverlay();
            this._view.cleanFormFields();
        }catch(error){
            this._view.displayPostureAddedFailed(error.message);
        }


    }
}