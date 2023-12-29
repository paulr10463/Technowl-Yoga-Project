import firstLetterUppercase from '../utils.js';  
import Swal from 'sweetalert2';

export default class YogaPosturesView {
    constructor() {
        this.yogaPostureInput = document.getElementById('postureNameInput');
        this.submitButton = document.getElementById('submitButton');
        this.yogaPostureMorphemesTable = document.getElementById("morphemesTable");
        this.englishTranslation = document.getElementById("EnglishTranslationResult");
        this.spanishTranslation = document.getElementById("SpanishTranslationResult");
        this.sanskritTranslation = document.getElementById("SanskritTranslationResult");
        this.picture = document.getElementById("PosturePicture");
        this.videoContainer = document.getElementById("PostureVideo");
    }

    displayPostureTranslations(yogaPosture) {
        const mainContainer = document.getElementById("MainSection");
        mainContainer.style.display = "flex";
        this.englishTranslation.innerHTML = firstLetterUppercase(yogaPosture.EnglishName);
        this.spanishTranslation.innerHTML = firstLetterUppercase(yogaPosture.SpanishName);
        this.sanskritTranslation.innerHTML = firstLetterUppercase(yogaPosture.SanskritName);
        const mainRightContainer = document.getElementById("MainRight");
        const mainLeftContainer = document.getElementById("MainLeft");
        if(yogaPosture.url == undefined) {
            mainRightContainer.style.display = "none";
            mainLeftContainer.style.width = "100%";
        }else{
            mainRightContainer.style.display = "flex";
            mainLeftContainer.style.width = "70%";
            this.picture.src = "../../assets/PosturesImages/" + yogaPosture.SanskritName + ".jpg";
            this.videoContainer.innerHTML = 
            `<iframe width="560" height="280" src="${yogaPosture.url}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>`;
        }

    }

    getYogaPostureName() {
        return this.yogaPostureInput.value;
    }

    addYogaPostureHandler(callback) {
        this.submitButton.addEventListener('click', (event) => {
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
        const titleRow = this.yogaPostureMorphemesTable.getElementsByTagName('thead')[0];
        const bodyRow = this.yogaPostureMorphemesTable.getElementsByTagName('tbody')[0];
        titleRow.innerHTML = '';
        bodyRow.innerHTML = '';

        const titleRowTr = document.createElement('tr');

        morphemesList.forEach((value, index) => {
            const titleRowTh = document.createElement('th');
            titleRowTh.innerHTML = firstLetterUppercase(value.morpheme);
            titleRowTr.appendChild(titleRowTh);
            titleRow.appendChild(titleRowTr)
        });

        const bodyRowTr = document.createElement('tr');
        morphemesList.forEach((value, index) => {
            const bodyRowTd = document.createElement('td');
            bodyRowTd.innerHTML = firstLetterUppercase(value.meaning);
            bodyRowTr.appendChild(bodyRowTd);
            bodyRow.appendChild(bodyRowTr)
        });
    }
}