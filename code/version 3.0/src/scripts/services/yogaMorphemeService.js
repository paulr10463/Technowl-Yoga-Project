import Morpheme from '../models/morpheme'
import * as yogaMorphemesData from '../../data/yogaMorphemes.json'
import YogaDictionary from './yogaDictionary.js'

export default class YogaMorphemeService {
    constructor() {
        this._yogaMorphemes = yogaMorphemesData.default.map(morpheme => new Morpheme(morpheme.morpheme, morpheme.meaning))
        this._yogaDictionary = new YogaDictionary();
    }

    addMorpheme(morphemeData) {
        const morpheme = new Morpheme(morphemeData.sanskrit, morphemeData.spanish);
        this._addMorphemeToLocalStorage(morpheme);
        this._addMorphemeToDictionary(morphemeData);
    }

    _addMorphemeToDictionary(morphemeData) {
        this._yogaDictionary.addWord(morphemeData.sanskrit);
        this._yogaDictionary.addWord(morphemeData.spanish);
        this._yogaDictionary.addWord(morphemeData.english);
    }

    _addMorphemeToPoses(morphemeData) {
        this._yogaMorphemes.push(new Morpheme(morphemeData.sanskrit, morphemeData.spanish));
    }

    _addMorphemeToLocalStorage(morpheme) {
        const listaMorfemas = this._getMorphemesFromLocalStorage();
        listaMorfemas.push(morpheme);
        localStorage.setItem('morphemesList', JSON.stringify(listaMorfemas));
    }

    _getMorphemesFromLocalStorage() {
        const listaStr = localStorage.getItem('morphemesList');
        const listaMorfemas = listaStr ? JSON.parse(listaStr) : [];
        return listaMorfemas;   
    }

    getMorphemes() {
        const morphemesListJson = this._getMorphemesFromLocalStorage();
        const newMorphemesList = morphemesListJson.map(morpheme => new Morpheme(morpheme._morpheme, morpheme._meaning))
        return this._yogaMorphemes.concat(newMorphemesList);
    }
}