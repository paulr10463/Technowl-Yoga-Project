import YogaPosture from '../models/yogaPosture'
import Morpheme from '../models/morpheme'
import {calculateLevenshteinDistance} from '../utils.js'
import * as yogaPosturesData from '../../data/yogaPostures.json'
import * as yogaMorphemesData from '../../data/yogaMorphemes.json'

export default class YogaPostureService {
    constructor() {
        this._yogaPostures = yogaPosturesData.default.map(posture => new YogaPosture(posture.english, posture.sanskrit, posture.spanish, posture.url));
        this._yogaMorphemes = yogaMorphemesData.default.map(morpheme => new Morpheme(morpheme.morpheme, morpheme.meaning))
        this._dictionary = []
        yogaPosturesData.default.map(posture => {
            this._dictionary.push(posture.english);
            this._dictionary.push(posture.sanskrit);
            this._dictionary.push(posture.spanish)});
    }

    getPosturesBySimilarNames(inputWord, umbral) {
      const similarWords = this._dictionary.filter((word) => {
        const distance = calculateLevenshteinDistance(
          inputWord.toLowerCase(),
          word.toLowerCase()
        );
        return distance <= umbral;
      });
    
      return similarWords;
    }

    getPostureByName(postureNameToSearch) {
        for (const posture of this._yogaPostures){
            if (posture.checkIfNameMatches(postureNameToSearch)){
                return posture
            }
        }
        return null
    }
    
    addMorpheme(yogaMorpheme) {
        const newMorphemeToAdd = Morpheme(yogaMorpheme.morpheme, yogaMorpheme.spanish);
        const newPostureToAdd = YogaPosture(yogaMorpheme.english, yogaMorpheme.sanskrit, yogaMorpheme.spanish, null);
        
    }

    getPostures() {
        return this._yogaPostures;
    }

    getMorphemes() {
        const morphemesListStr = localStorage.getItem('MorphemesList');
        const listaMorfemas = listaStr ? JSON.parse(morphemesListStr) : [];
        //return listaMorfemas;
        return this._yogaMorphemes;
    }
}