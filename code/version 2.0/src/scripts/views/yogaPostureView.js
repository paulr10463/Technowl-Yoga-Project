import firstLetterUppercase from '../utils.js';  
import Swal from 'sweetalert2';

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
    }

    displayPostureTranslations(yogaPosture) {
        const mainContainer = document.getElementById("MainSection");
        mainContainer.style.display = "flex";
        this._englishTranslation.innerHTML = firstLetterUppercase(yogaPosture.getEnglishName());
        this._spanishTranslation.innerHTML = firstLetterUppercase(yogaPosture.getSpanishName());
        this._sanskritTranslation.innerHTML = firstLetterUppercase(yogaPosture.getSanskritName());
        const mainRightContainer = document.getElementById("MainRight");
        const mainLeftContainer = document.getElementById("MainLeft");
        if(yogaPosture.getURL() == undefined) {
            mainRightContainer.style.display = "none";
            mainLeftContainer.style.width = "100%";
        }else{
            mainRightContainer.style.display = "flex";
            mainLeftContainer.style.width = "70%";
            this._picture.src = "images/PosturesImages/" + yogaPosture.getSanskritName() + ".jpg";
            this._videoContainer.innerHTML = 
            `<iframe class="video__player" width="560" height="280" src="${yogaPosture.getURL()}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>`;
        }

    }

    getYogaPostureName() {
        return this._yogaPostureInput.value;
    }

    addYogaPostureHandler(callback) {
        this._submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const yogaPostureNameInput = this.getYogaPostureName();
            callback(yogaPostureNameInput);
        });
    }

    displayPosturesSuggestions(suggestionsList){
        const results = suggestionsList.map(element => `<strong class="postureSuggestionButton"> ${element} </strong>`);
        Swal.fire({
            icon: "error",
            title: "Postura no encontrada",
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
            title: "Ops! Postura no encontrada",
            text: 'No se encontraron palabras similares',
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