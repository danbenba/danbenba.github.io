var questions = [
    {
        question: "L'école existe depuis quand ?",
        options: ["L'Antiquité", "Hier", "1985", "998"],
        answer: "L'Antiquité"
    },
    {
        question: "Comment vivaient les hommes du Paléolithique ?",
        options: ["Chasse, cueillette et pêche", "Agriculture", "Commerce", "Élevage"],
        answer: "Chasse, cueillette et pêche"
    },
    {
        question: "Sao Paulo est-elle une grande métropole ?",
        options: ["Oui", "Non"],
        answer: "Oui"
    },
    {
        question: "Combien de personnes habitent Sao Paulo ?",
        options: ["Environ 12 millions", "Environ 5 millions", "Environ 20 millions", "Environ 8 millions"],
        answer: "Environ 12 millions"
    },
    {
        question: "Quand commence la période de l'histoire ?",
        options: ["Avec l'apparition de l'écriture", "Au Moyen Âge", "À la Renaissance", "À la Préhistoire"],
        answer: "Avec l'apparition de l'écriture"
    },
    {
        question: "Comment les villes étaient-elles caractérisées autrefois ?",
        options: ["Remparts, marchés animés et architecture spécifique", "Gratte-ciel et centres commerciaux", "Transport en commun et parcs", "Immeubles résidentiels et espaces verts"],
        answer: "Remparts, marchés animés et architecture spécifique"
    },
    {
        question: "Citez-moi trois droits des citoyens.",
        options: ["Droit à la liberté d'expression", "Droit de vote", "Droit à l'éducation", "Droit de propriété"],
        answer: "Droit à la liberté d'expression"
    },
    {
        question: "Citez-moi trois devoirs des citoyens.",
        options: ["Respect des lois", "Paiement des impôts", "Participation à la vie civique", "Service militaire"],
        answer: "Respect des lois"
    },
    {
        question: "Qu'est-ce que la politique ?",
        options: ["Ensemble des activités liées à la gouvernance d'un pays", "Étude des phénomènes naturels", "Activités artistiques et culturelles", "Pratique sportive"],
        answer: "Ensemble des activités liées à la gouvernance d'un pays"
    },
    {
        question: "Les déserts sont-ils marqués par quoi ?",
        options: ["Faible pluviométrie et végétation rare", "Climat humide et forêt dense", "Grands lacs et rivières", "Montagnes et vallées"],
        answer: "Faible pluviométrie et végétation rare"
    },
    {
        question: "Quelles sont les contraintes naturelles au Groenland ?",
        options: ["Climat froid, tempêtes de neige et nuit polaire", "Climat tropical et forêt équatoriale", "Sécheresse et manque d'eau", "Volcans et tremblements de terre"],
        answer: "Climat froid, tempêtes de neige et nuit polaire"
    },
    {
        question: "Quand la Gaule devient-elle romaine ?",
        options: ["Vers 50 avant J.-C.", "Vers 500 après J.-C.", "Vers 1000 avant J.-C.", "Vers 1500 après J.-C."],
        answer: "Vers 50 avant J.-C."
    },
    {
        question: "Qu'est-ce que la romanisation ?",
        options: ["Influence de la culture romaine sur les territoires conquis", "Conquête de nouveaux territoires par les Romains", "Déclin de l'Empire romain", "Période de paix et de prospérité dans l'Empire romain"],
        answer: "Influence de la culture romaine sur les territoires conquis"
    },
    {
        question: "Comment le prophète Abraham est-il appelé ?",
        options: ["Ibrahim", "Moïse", "David", "Jésus"],
        answer: "Ibrahim"
    },
    {
        question: "Quand est-il né ?",
        options: ["Vers 2000 avant J.-C.", "Vers 500 après J.-C.", "Vers 1000 avant J.-C.", "Vers 1500 après J.-C."],
        answer: "Vers 2000 avant J.-C."
    },
    {
        question: "Quelle est la capitale du Brésil ?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
        answer: "Brasília"
    }
];

// Mélanger les réponses dans chaque question
for (var i = 0; i < questions.length; i++) {
    shuffleArray(questions[i].options);
}

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
