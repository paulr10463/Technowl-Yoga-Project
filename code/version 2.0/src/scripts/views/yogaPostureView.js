import firstLetterUppercase from '../utils.js';  

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
        this.englishTranslation.innerHTML = firstLetterUppercase(yogaPosture.EnglishName);
        this.spanishTranslation.innerHTML = firstLetterUppercase(yogaPosture.SpanishName);
        this.sanskritTranslation.innerHTML = firstLetterUppercase(yogaPosture.SanskritName);
        this.picture.src = "../../assets/PosturesImages/" + yogaPosture.SanskritName + ".jpg";
        console.log(yogaPosture.url);
        this.videoContainer.innerHTML = 
        `<iframe width="560" height="315" src="${yogaPosture.url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>`;
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

    displayPostureNotFound() {
        alert("No se encontró la postura buscada. Revisa el nombre.")
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