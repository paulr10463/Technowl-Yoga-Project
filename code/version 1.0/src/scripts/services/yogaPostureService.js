import YogaPosture from '../models/yogaPosture'
import Morpheme from '../models/morpheme'
// Modelo (model.js)

const yogaPosturesData = [
    {
        "english": "Mountain Pose",
        "sanskrit": "Tadasana",
        "spanish": "Postura de la Montaña",
        "url": "https://youtu.be/aEQVYMb9P6U?si=akBylARddYj-Xhy4"
    },
    {
        "english": "Downward-Facing Dog",
        "sanskrit": "Adho Mukha Svanasana",
        "spanish": "Perro mirando hacia abajo",
        "url": "https://www.youtube.com/watch?v=KkT3DEpCWe4"
    },
    {
        "english": "Warrior I",
        "sanskrit": "Virabhadrasana I",
        "spanish": "Guerrero I",
        "url" : "https://www.youtube.com/watch?v=NgCY67xHwMI"
    },
    {
        "english": "Warrior II",
        "sanskrit": "Virabhadrasana II",
        "spanish": "Guerrero II",
        "url": "https://www.youtube.com/watch?v=-8hKpr5dxFM"
    },
    {
        "english": "Tree Pose",
        "sanskrit": "Vrikshasana",
        "spanish": "Postura del Árbol",
        "url": "https://youtu.be/6g5zC1B2EDQ?si=hpF4nj3eOD6GIUCI"
    },
    {
        "english": "Child's Pose",
        "sanskrit": "Balasana",
        "spanish": "Postura del Niño",
        "url": "https://youtu.be/wzQqaCiYCqs?si=iYIOFb8DiIg4QMh0"
    },
    {
        "english": "Half Cobra Pose",
        "sanskrit": "Ardha Bhujangasana",
        "spanish": "Postura de la Cobra a la mitad",
        "url": "https://youtu.be/YiaUHv5o5ls?si=otwG0ZOGjdqfRxM4"
    },
    {
        "english": "Seated Forward Bend",
        "sanskrit": "Paschimottanasana",
        "spanish": "Flexión hacia adelante sentado",
        "url": "https://youtu.be/wG0eR6W1Jxg?si=gK82f9GXCxD2Rauy"
    },
    {
        "english": "Bridge Pose",
        "sanskrit": "Setu Bandhasana",
        "spanish": "Postura del Puente",
        "url": "https://youtu.be/bzxt2msjEfg?si=m6WspfrbtjIFjLQX"
    },
    {
        "english": "Corpse Pose",
        "sanskrit": "Shavasana",
        "spanish": "Postura del Cadáver",
        "url": "https://youtu.be/R-DB4qF6Egk?si=1DT9ARhR3pRsuHtc"
    },
    {
        "english": "Triangle Pose",
        "sanskrit": "Trikonasana",
        "spanish": "Postura del Triángulo",
        "url": "https://youtu.be/S6gB0QHbWFE?si=EbxOpeVbbjawhXIM"
    },
    {
        "english": "Plank Pose",
        "sanskrit": "Kumbhakasana",
        "spanish": "Postura de la Plancha",
        "url": "https://youtu.be/k1eqBkQQP3g?si=tvVfX-FTDOeowv1I"
    },
    {
        "english": "Upward-Facing Dog",
        "sanskrit": "Urdhva Mukha Svanasana",
        "spanish": "Perro mirando hacia arriba",
        "url": "https://youtu.be/L57v0Lq9EcM?si=agoOWqp0yZqUZgd3"
    },
    {
        "english": "Fish Pose",
        "sanskrit": "Matsyasana",
        "spanish": "Postura del Pez",
        "url": "https://youtu.be/BAhOz-b_dEc?si=__6uzlRYb8w2uZNj"
    },
    {
        "english": "Chair Pose",
        "sanskrit": "Utkatasana",
        "spanish": "Postura de la Silla",
        "url": "https://youtu.be/iAclKRoyOjU?si=IU17nt-Pq-0L-qK_"
        },
    {
        "english": "Garland Pose",
        "sanskrit": "Malasana",
        "spanish": "Postura de la Guirnalda",
        "url": "https://youtu.be/ZhcTGjiZhDc?si=QUAQti0G7K2CYNvc"
    },
    {
        "english": "Pigeon Pose",
        "sanskrit": "Eka Pada Rajakapotasana",
        "spanish": "Postura de la Paloma",
        "url": "https://youtu.be/625gxCZFh74?si=bvxpOJrdtEjyj3-3"
    },
    {
        "english": "Upward Salute",
        "sanskrit": "Urdhva Hastasana",
        "spanish": "Saludo hacia arriba",
        "url": "https://youtu.be/QMVJp_Fop2g?si=HYiOYK3TC99qHHUP"
    },
    {
        "english": "Revolved Triangle Pose",
        "sanskrit": "Parivrtta Trikonasana",
        "spanish": "Postura del Triángulo Invertido",
        "url": "https://youtu.be/ioUcFTiBCcY?si=KTuOv6ORSpsCoiSo"
    },
    {
        "english": "Revolved Head To Knee Pose",
        "sanskrit": "Parivrtta Janu Sirsasana",
        "spanish": "Postura de la Cabeza a la Rodilla Invertida",
        "url": "https://youtu.be/QCP6TEuosVs?si=ScrYcezlSwb3BCID"
    },
    {
        "english": "Pose",
        "sanskrit": "Asana",
        "spanish": "postura",
        "url": "https://youtu.be/QCP6TEuosVs?si=ScrYcezlSwb3BCID"
    },
    {
        "english": "Down",
        "sanskrit": "Adho",
        "spanish": "abajo"
    },
    {
        "english": "Half",
        "sanskrit": "Ardha",
        "spanish": "mitad"
    },
    {
        "english": "Upward",
        "sanskrit": "Urdhva",
        "spanish": "arriba"
    },
    {
        "english": "Face",
        "sanskrit": "Mukha",
        "spanish": "rostro"
    },
    {
        "english": "Dog",
        "sanskrit": "Svana",
        "spanish": "perro"
    },
    {
        "english": "Warrior",
        "sanskrit": "Virabhadra",
        "spanish": "guerrero"
    },
    {
        "english": "Tree",
        "sanskrit": "Vriksha",
        "spanish": "árbol"
    },
    {
        "english": "Child",
        "sanskrit": "Bala",
        "spanish": "niño"
    },
    {
        "english": "Cobra",
        "sanskrit": "Bhujanga",
        "spanish": "cobra"
    },
    {
        "english": "West",
        "sanskrit": "Paschi",
        "spanish": "oeste"
    },
    {
        "english": "Bridge",
        "sanskrit": "Setu",
        "spanish": "puente"
    },
    {
        "english": "Corpse",
        "sanskrit": "Shava",
        "spanish": "cadáver"
    },
    {
        "english": "Triangle",
        "sanskrit": "Trikona",
        "spanish": "triángulo"
    },
    {
        "english": "Fish",
        "sanskrit": "Matsya",
        "spanish": "pez"
    },
    {
        "english": "Garland",
        "sanskrit": "Mala",
        "spanish": "guirnalda"
    },
    {
        "english": "One",
        "sanskrit": "Eka",
        "spanish": "uno"
    },
    {
        "english": "Foot",
        "sanskrit": "Pada",
        "spanish": "pie"
    },
    {
        "english": "Royal",
        "sanskrit": "Raja",
        "spanish": "real"
    },
    {
        "english": "Pigeon",
        "sanskrit": "Kapota",
        "spanish": "paloma"
    },
    {
        "english": "Hand",
        "sanskrit": "Hasta",
        "spanish": "mano"
    },
    {
        "english": "Inverted",
        "sanskrit": "Parivrtta",
        "spanish": "invertido"
    },
    {
        "english": "Knee",
        "sanskrit": "Janu",
        "spanish": "rodilla"
    },
    {
        "english": "Head",
        "sanskrit": "Sirsa",
        "spanish": "cabeza"
    }
]
const yogaMorphemesData = [
    {
        "morpheme": "Asana",
        "meaning": "postura"
    },
    {
        "morpheme": "Adho",
        "meaning": "abajo"
    },
    {
        "morpheme": "Ardha",
        "meaning": "mitad"
    },
    {
        "morpheme": "Urdhva",
        "meaning": "arriba"
    },
    {
        "morpheme": "Mukha",
        "meaning": "rostro"
    },
    {
        "morpheme": "Svana",
        "meaning": "perro"
    },
    {
        "morpheme": "Virabhadra",
        "meaning": "guerrero"
    },
    {
        "morpheme": "Vriksha",
        "meaning": "árbol"
    },
    {
        "morpheme": "Bala",
        "meaning": "niño"
    },
    {
        "morpheme": "Bhujanga",
        "meaning": "cobra"
    },
    {
        "morpheme": "Paschi",
        "meaning": "oeste"
    },
    {
        "morpheme": "Setu",
        "meaning": "puente"
    },
    {
        "morpheme": "Shava",
        "meaning": "cadáver"
    },
    {
        "morpheme": "Trikona",
        "meaning": "triángulo"
    },
    {
        "morpheme": "Matsya",
        "meaning": "pez"
    },
    {
        "morpheme": "Mala",
        "meaning": "guirnalda"
    },
    {
        "morpheme": "Eka",
        "meaning": "uno"
    },
    {
        "morpheme": "Pada",
        "meaning": "pie"
    },
    {
        "morpheme": "Raja",
        "meaning": "real"
    },
    {
        "morpheme": "Kapota",
        "meaning": "paloma"
    },
    {
        "morpheme": "Hasta",
        "meaning": "mano"
    },
    {
        "morpheme": "Parivrtta",
        "meaning": "invertido"
    },
    {
        "morpheme": "Janu",
        "meaning": "rodilla"
    },
    {
        "morpheme": "Sirsa",
        "meaning": "cabeza"
    }
]
;
export default class YogaPostureService {
    constructor() {
        this.yogaPostures = yogaPosturesData.map(posture => new YogaPosture(posture.english, posture.sanskrit, posture.spanish));
        this.yogaMorphemes = yogaMorphemesData.map(morpheme => new Morpheme(morpheme.morpheme, morpheme.meaning))
    }

    getPostureByName(postureNameToSearch) {
        for (const posture of this.yogaPostures){
            if (posture.checkIfNameMatches(postureNameToSearch)){
                return posture
            }
        }
        return null
    }
    
    addPosture(yogaPosture) {
        this.yogaPostures.push(yogaPosture);
    }

    getPostures() {
        return this.yogaPostures;
    }

    getMorphemes() {
        return this.yogaMorphemes;
    }
}