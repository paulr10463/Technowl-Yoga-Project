import {deleteMultipleSpaces} from '../utils.js'

export default class YogaPosture {
    constructor(EnglishName, SanskritName, SpanishName, URL) {
        this._EnglishName = EnglishName;
        this._SanskritName = SanskritName;
        this._SpanishName = SpanishName;
        this._url = URL;
    }

    checkIfNameMatches(nameToSearch){
        return this._EnglishName.toLowerCase() == deleteMultipleSpaces(nameToSearch.trim()).toLowerCase()
        || this._SpanishName.toLowerCase() == deleteMultipleSpaces(nameToSearch.trim()).toLowerCase()
        || this._SanskritName.toLowerCase() == deleteMultipleSpaces(nameToSearch.trim()).toLowerCase();
    }

    getMorphemesByPosture(morphemesList){
        const morphemesFound = []
        for (const morpheme of morphemesList){
            if(this._SanskritName.toLowerCase().includes(morpheme.getMorpheme().toLowerCase())){
                morphemesFound.push(morpheme)
            }
        }
        return morphemesFound.reverse()
    }

    getEnglishName(){
        return this._EnglishName
    }

    getSanskritName(){
        return this._SanskritName
    }

    getSpanishName(){
        return this._SpanishName
    }

    getURL(){
        return this._url
    }

}


