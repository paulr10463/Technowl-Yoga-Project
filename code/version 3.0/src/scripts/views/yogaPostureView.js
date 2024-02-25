import firstLetterUppercase from '../utils.js';  
import Swal from 'sweetalert2';
import { toggleDrawer } from '../utils.js';

export default class YogaPosturesView {
    constructor() {
        this._yogaPostureInput = document.getElementById('postureNameInput');
        this._submitButton = document.getElementById('submitButton');
        this._yogaPostureMorphemesTable = document.getElementById("morphemesTable");
        this._englishTranslation = document.getElementById("EnglishTranslationResult");
        this._spanishTranslation = document.getElementById("SpanishTranslationResult");
        this._sanskritTranslation = document.getElementById("SanskritTranslationResult");
        this._picture = document.getElementById("PosturePicture");
        this._videoContainer = document.getElementById("PostureVideo");

        //Input Postures
        this._poseInputSanskrit = document.getElementById('poseInputSanscrito');
        this._poseInputEnglish = document.getElementById('poseInputIngles');
        this._poseInputSpanish = document.getElementById('poseInputEspanol');
        this._poseInputImage = document.getElementById('poseInputImagen');
        this._poseInputURL = document.getElementById('poseInputVideo');
        this._addPoseButton = document.getElementById('submitPoseButton');

        //Pose Overlay
        document.getElementById('closePoseOverlay').addEventListener('click', function() {
            document.getElementById('PoseOverlay').classList.remove('show');
        });
        
        document.getElementById('showPoseOverlay').addEventListener('click', function() {
            document.getElementById('PoseOverlay').classList.add('show');
            toggleDrawer();
        });
        
    }

    displayPostureTranslations(yogaPosture) {
        const mainContainer = document.getElementById("MainSection");
        mainContainer.style.display = "flex";
        this._englishTranslation.innerHTML = firstLetterUppercase(yogaPosture.getEnglishName());
        this._spanishTranslation.innerHTML = firstLetterUppercase(yogaPosture.getSpanishName());
        this._sanskritTranslation.innerHTML = firstLetterUppercase(yogaPosture.getSanskritName());
        const mainRightContainer = document.getElementById("MainRight");
        const mainLeftContainer = document.getElementById("MainLeft");
        console.log(yogaPosture.getURL());
        if(yogaPosture.getURL() == undefined) {
            mainRightContainer.style.display = "none";
            mainLeftContainer.style.width = "100%";
        }else{
            mainRightContainer.style.display = "flex";
            mainLeftContainer.style.width = "70%";
            this._picture.src = yogaPosture.getImage()==""?"images/PosturesImages/" + yogaPosture.getSanskritName() + ".jpg" : yogaPosture.getImage();
            this._videoContainer.innerHTML = 
            `<iframe class="video__player" src="${yogaPosture.getURL()}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>`;
        }

    }

    getYogaPostureName() {
        return this._yogaPostureInput.value;
    }

    closePoseOverlay() {
        document.getElementById('PoseOverlay').classList.remove('show');
    }

    searchPostureHandler(callback) {
        this._submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const yogaPostureNameInput = this.getYogaPostureName();
            callback(yogaPostureNameInput);
        });
    }

    addPostureHandler(callback) {
        this._addPoseButton.addEventListener('click', (event) => {
            event.preventDefault();
            const yogaPostureData = {
                english: this._poseInputEnglish.value,
                sanskrit: this._poseInputSanskrit.value,
                spanish: this._poseInputSpanish.value,
                image: this._poseInputImage.files[0],
                url: this._poseInputURL.value
            }
            callback(yogaPostureData);
        });
    }

    displayPosturesSuggestions(suggestionsList){
        const results = suggestionsList.map(element => `<strong class="postureSuggestionButton"> ${element} </strong>`);
        Swal.fire({
            icon: "error",
            title: "¡Oops! Parece que la postura que buscas no se encuentra disponible. ",
            html: `
            Tal vez quisiste escribir: 
            <br>
            <b>${results}</b>
          `,
          showCloseButton: true,
          });
    }

    displayPostureNotFound() {
        Swal.fire({
            icon: "error",
            title: "¡Oops! Parece que la postura que buscas no se encuentra disponible.",
            text: 'Por favor, verifica la información e inténtalo de nuevo.',
          });
    }

    displayPostureNotFound() {
        Swal.fire({
            icon: "error",
            title: "¡Oops! Parece que la postura que buscas no se encuentra disponible.",
            text: 'Por favor, verifica la información e inténtalo de nuevo.',
          });
    }

    
    displayPostureAdded() {
        Swal.fire({
            icon: "success",
            title: "¡Postura añadida!",
          });
    }

    displayPostureAddedFailed(errorMessage) {
        Swal.fire({
            icon: "error",
            title: "¡Oops! Parece que la postura no se pudo agregar",
            text: errorMessage,
          });
    }

    displayPostureMorphemes(morphemesList) {
        const titleRow = this._yogaPostureMorphemesTable.getElementsByTagName('thead')[0];
        const bodyRow = this._yogaPostureMorphemesTable.getElementsByTagName('tbody')[0];
        titleRow.innerHTML = '';
        bodyRow.innerHTML = '';

        const titleRowTr = document.createElement('tr');

        morphemesList.forEach((value, index) => {
            const titleRowTh = document.createElement('th');
            titleRowTh.innerHTML = firstLetterUppercase(value.getMorpheme());
            titleRowTr.appendChild(titleRowTh);
            titleRow.appendChild(titleRowTr)
        });

        const bodyRowTr = document.createElement('tr');
        morphemesList.forEach((value, index) => {
            const bodyRowTd = document.createElement('td');
            bodyRowTd.innerHTML = firstLetterUppercase(value.getMeaning());
            bodyRowTr.appendChild(bodyRowTd);
            bodyRow.appendChild(bodyRowTr)
        });
    }
}