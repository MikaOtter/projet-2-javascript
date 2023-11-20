var prompt = require("prompt-sync")();

// LE SCORE DU JOUEUR
let score = 0;
// NOMBRE D'ERREURS
let error = 3;
// REPONSES POSSIBLES
const repPoss = ["A", "B", "C", "D"];
// WIN || LOOSE
const win = " \nOoOoOoOoOo Bien joué camarade ! oOoOoOoOoO \n";
const lose = "\nXxXxXxXxXx Mauvaise réponse. xXxXxXxXxX \n";
// LES QUESTIONS & REPONSES
const listQuestion = [
  {
    name: "Question 1",
    question: "Quelle est la forme de la Terre ?",
    response: "A",
    possibleResponse: [
      "A. Tout le monde le sait qu'elle est plate...",
      "B. En forme de sphère",
      "C. En forme de cube comme dans Minecraft ",
      "D. Bleu comme une orange !",
    ],
    goodAnswer: "A. Tout le monde le sait qu'elle est plate...",
  },
  {
    name: "Question 2",
    question:
      "Les poissons peuvent-ils respirer en dehors de l'eau ? Attention, celle-ci est un peu dure...",
    response: "D",
    possibleResponse: [
      "A. Non.",
      "B. Oui, mais pas longtemps.",
      "C. Oui, il y en a même qui vivent en dehors de l'eau en permanence.",
      "D. Non, mais avec un tubas oui.",
    ],
    goodAnswer: "D. Non, mais avec un tubas oui.",
  },
  {
    name: "Question 3",
    question: "Poutin est-il un être humain ?",
    response: "C",
    possibleResponse: [
      "A. Humain dans quel sens ?",
      "B. Non, c'est un reptilien...",
      "C. Vlad est le fils d'un ours. Donc non, c'est un ours.",
      "D. Oui, Poutin est un être humain. ",
    ],
    goodAnswer: "C. Vlad est le fils d'un ours. Donc non, c'est un ours.",
  },
  {
    name: "Question 4",
    question: "Qui est le premier à avoir marcher sur la lune ?",
    response: "B",
    possibleResponse: [
      "A. Neil Young ",
      "B. Neil Amstrong",
      "C. Neil Astier",
      "D. Bugs Bunny",
    ],
    goodAnswer: "B. Neil Amstrong",
  },
  {
    name: "Question 5",
    question: "Quel est le symbole de la chouette ?",
    response: "B",
    possibleResponse: [
      "A. La chouette est le symbole d'un code qui marche. Parce qu'un code qui marche, c'est..",
      "B. Chuck Norris est bien plus chouette qu'une chouette.",
      "C. Hedwig ??!",
      "D. La chouette est le symbole de la connaissance, de la sagesse.",
    ],
    goodAnswer: "B. Chuck Norris est bien plus chouette qu'une chouette.",
  },
];
////////////////////////////////////////////
// LAUNCH GAME//////////////////////////////
console.log(
  "Bienvenue dans Le Quizz. \n C'est un quizz basique, vous aurez le choix entre 4 réponses." +
    " Entrez la lettre de votre réponse sans espace ni ponctuation EN MAJUSCULE sinon votre réponse sera considéré comme fausse." +
    "Pour rappel : qu'est-ce que la vérité ?" +
    " De toute façon les gouvernements nous mentent et nous sommes dans un monde de mensonge." +
    " Alors bon... Moi je ne crois pas à la vérité conventionnelle. Je ne suis pas un mouton. Enfin bref, prêt à jouer ? \n"
);
// QUESTIONS //////////////////////////
//QUESTION 1

for (let i = 0; i < listQuestion.length; i++) {
  console.log(
    "█████████████████████████████╗\n" +
      `███████ ${listQuestion[i].name} ██████████║: ${listQuestion[i].question}\n` +
      "█████████████████████████████║\n" +
      "╚════════════════════════════╝\n"
  );
  for (let j = 0; j < listQuestion[i].possibleResponse.length; j++) {
    console.log(listQuestion[i].possibleResponse[j]);
  }
  console.log("");
  let choice = prompt("Votre réponse : ");
  while (!repPoss.includes(choice) && error > 1) {
    error--;
    console.log(
      `Vous devez entrez la lettre A, B, C ou D, en majuscule et sans espace. Plus que ${error} erreurs.`
    );
    choice = prompt("Votre nouvelle réponse : ");
  }
  if (choice === listQuestion[i].response) {
    console.log(win);
    score++;
  } else {
    console.log(lose + `La réponse ${listQuestion[i].goodAnswer} \n`);
  }
  error = 3;
}

console.log(
  ` \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Bravo ou pas bravo, c'est subjectif... En tout cas voilà votre score : ${score} . (sur ${listQuestion.length} questions) `
);
