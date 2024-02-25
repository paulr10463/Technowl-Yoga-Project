import YogaPosture from '../models/yogaPosture'
import Morpheme from '../models/morpheme'
import { calculateLevenshteinDistance } from '../utils.js'
import * as yogaPosturesData from '../../data/yogaPostures.json'
import YogaDictionary from './yogaDictionary.js'
import { getBase64Image } from "../utils.js"

export default class YogaPostureService {
    constructor() {
        this._yogaPostures = yogaPosturesData.default.map(posture => new YogaPosture(posture.english, posture.sanskrit, posture.spanish, posture.url));
        this._dictionary = new YogaDictionary();
    }

    getPosturesBySimilarNames(inputWord, umbral) {
        const similarWords = this._dictionary.getYogaDictionary().filter((word) => {
            const distance = calculateLevenshteinDistance(
                inputWord.toLowerCase(),
                word.toLowerCase()
            );
            return distance <= umbral;
        });

        return similarWords;
    }

    getPostureByName(postureNameToSearch) {
        for (const posture of this.getPoses()) {
            if (posture.checkIfNameMatches(postureNameToSearch)) {
                return posture
            }
        }
        return null
    }

    _addPoseToLocalStorage(pose) {
        const posesList = this._getPosesFromLocalStorage();
        posesList.push(pose);
        localStorage.setItem('posesList', JSON.stringify(posesList));
    }

    addPose(yogaPostureData) {
        getBase64Image(yogaPostureData.image, (base64Image) => {
            yogaPostureData.image = base64Image;
            this._addPoseToLocalStorage(yogaPostureData);
        });
        this._addPoseToDictionary(yogaPostureData);
    }

    _addPoseToDictionary(pose) {
        this._dictionary.addWord(pose.english);
        this._dictionary.addWord(pose.sanskrit);
        this._dictionary.addWord(pose.spanish);
    }

    addMorphemeToPoses(morphemeData) {
        this._addPoseToLocalStorage(morphemeData);
    }

    _getPosesFromLocalStorage() {
        const posesListStr = localStorage.getItem('posesList');
        const posesList = posesListStr ? JSON.parse(posesListStr) : [];
        return posesList;
    }

    getPoses() {
        const newPosesList = this._getPosesFromLocalStorage().map(pose => new YogaPosture(pose.english, pose.sanskrit, pose.spanish, pose.url, pose.image));
        console.log(newPosesList);
        return this._yogaPostures.concat(newPosesList);
    }
}