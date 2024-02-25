import * as yogaDictionary from '../../data/yogaDictionary.json';

export default class YogaDictionary {
    constructor() {
        this._dictionary = yogaDictionary.default;
    }

    addWord(word) {
        this._addWordToLocalStorage(word);
    }

    _addWordToLocalStorage(word) {
        const wordsList = this._getFromLocalStorage();
        wordsList.push(word);
        localStorage.setItem('wordsList', JSON.stringify(wordsList));
    }

    _getFromLocalStorage() {
        const wordsListStr = localStorage.getItem('wordsList');
        const wordsList = wordsListStr ? JSON.parse(wordsListStr) : [];
        return wordsList;
    }
    
    getYogaDictionary() {
        return this._dictionary.concat(this._getFromLocalStorage());
    }
}