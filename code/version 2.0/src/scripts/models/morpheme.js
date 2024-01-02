export default class Morpheme {
    constructor(morpheme, meaning) {
        this._morpheme = morpheme;
        this._meaning = meaning;
    }
    getMorpheme(){
        return this._morpheme
    }
    getMeaning(){
        return this._meaning
    }
}