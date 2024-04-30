import { Filaire, Radio ,Droite, Gauche , Manuel, MoteurBeker, SousLanteau , SousLanteauInverse, EnApplique, AppliqueEncastre, AppliqueEnApplique, Sangle, Manivelle , Lame41Image, Lame55Image } from './imageModule'

const motoriseOptions = [
  { label: 'Filaire', description: 'Description for Motorisé 1', image: Filaire },
  { label: 'Radio', description: 'Description for Motorisé 2', image: Radio }
]

const interrupteurOptions = [
  { label: 'Sans', description: "Pas d'interrupteur", image: '../../assets/none.png' },
  { label: 'Encastree', description: 'Interrupteur encastré', image: AppliqueEncastre },
  { label: 'En applique', description: 'Interrupteur en applique', image: AppliqueEnApplique }
]

const telecommandeOptions = [
  { label: 'Sans', description: 'Sans télécommande', image: '../../assets/Encastree.png' },
  { label: 'Avec', description: 'Avec télécommande', image: '../../assets/EnApplique.png' }
];


const commandeOptions = [
  { label: 'Emetteur mural', description: 'Interrupteur encastré', image: '../../assets/Encastree.png' },
  { label: 'Télécommande', description: 'Interrupteur en applique', image: '../../assets/EnApplique.png' }
]

const manualOptions = [
  { label: 'Manivelle', description: 'Description for Manuel 1', image: Manivelle },
  { label: 'Sangle', description: 'Description for Manuel 2', image: Sangle }
];

const sortieDeCableOptions = [
  { label: 'Gauche', description: 'Sortie de câble à gauche', image: Droite },
  { label: 'Droite', description: 'Sortie de câble à droite', image: Gauche }
];

const ControlOptions = [
  { label: 'Manuel', description: 'Fonctionne par une commande manuelle.', image: Manuel },
  { label: 'Motorisé', description: 'Actionné électriquement', image: MoteurBeker }
]

const PoseOptions = [
  { label: 'sous lanteau', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: SousLanteau },
  { label: 'sous lanteau inverse', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: SousLanteauInverse },
  { label: 'En applique', description: 'Coffre pan coupé ou quart de rond aluminium differentes couleurs', image: EnApplique }
];

const LameChoices = [
  { label: 'Lame 41', description: 'Lames en Aluminium plié et injectées de mousse isolante.', image: Lame41Image },
  { label: 'Lame 55', description: 'Lame volet roulant aluminium isolée 55x14.', image: Lame55Image }
]

const ManoeuvreConfig = [
  "Outil De Commande",
  "Type de Motorisation (marque : Becker)",
  "Type de Motorisation (marque : Becker)",
  "Interrupteur",
  "Sortie de câble"
];

const colorOptions = {
  coulisse: {
    'Blanc': '#ffffff',
    'Gris-clair': '#d3d3d3',
    'Gris-métallique': '#808080',
    'Gris-anthracite': '#333333',
    'Marron': '#8b4513',
    'Chêne-doré': '#daa520'
  },
  tablier: {
    'Blanc': '#ffffff',
    'Gris-clair': '#d3d3d3',
    'Gris-métallique': '#808080',
    'Gris-anthracite': '#333333',
    'Marron': '#8b4513',
    'Chêne-doré': '#daa520'
  },
  lameFinale: {
    'Blanc': '#ffffff',
    'Gris-clair': '#d3d3d3',
    'Gris-métallique': '#808080',
    'Gris-anthracite': '#333333',
    'Marron': '#8b4513',
    'Chêne-doré': '#daa520'
  }
};

export { motoriseOptions, interrupteurOptions, commandeOptions, manualOptions ,sortieDeCableOptions, ControlOptions, PoseOptions, telecommandeOptions , colorOptions , LameChoices ,ManoeuvreConfig  }
