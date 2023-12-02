
export default class YogaPosture {
    constructor(EnglishName, SanskritName, SpanishName, classification) {
        this.EnglishName = EnglishName;
        this.SanskritName = SanskritName;
        this.SpanishName = SpanishName;
        this.classification = classification;
    }

    checkIfNameMatches(nameToSearch){
        return this.EnglishName.toLowerCase() == nameToSearch.trim().toLowerCase()
        || this.SpanishName.toLowerCase() == nameToSearch.trim().toLowerCase()
        || this.SanskritName.toLowerCase() == nameToSearch.trim().toLowerCase();
    }

    getMorphemesByPosture(morphemesList){
        const morphemesFound = []
        for (const morpheme of morphemesList){
            if(this.SanskritName.toLowerCase().includes(morpheme.morpheme.toLowerCase())){
                morphemesFound.push(morpheme)
            }
        }
        return morphemesFound
    }
}

