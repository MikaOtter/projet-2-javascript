var prompt = require("prompt-sync")();

// LE SCORE DU JOUEUR
let score = 0;

// LES QUESTIONS & REPONSES

const qOne =
  "???????Question 1??????? : Quelle est la forme de la Terre ? \n \n";
const rOne =
  "A. Tout le monde le sait qu'elle est plate... \n" +
  "B. En forme de sphère \n" +
  "C. En forme de cube comme dans Minecraft \n" +
  "D. Bleu comme une orange ! \n";

const qTwo =
  "???????Question 2??????? : Les poissons peuvent-ils respirer en dehors de l'eau ? Attention, celle-ci est un peu dure... \n \n";
const rTwo =
  "A. Non. \n" +
  "B. Oui, mais pas longtemps. \n" +
  "C. Oui, il y en a même qui vivent en dehors de l'eau en permanence.\n" +
  "D. Non, mais avec un tubas oui. \n";

const qThree =
  "???????Question 3??????? : Poutin est-il un être humain ? \n \n";
const rThree =
  "A. Humain dans quel sens ? \n" +
  "B. Non, c'est un reptilien... \n" +
  "C. Vlad est le fils d'un ours. Donc non, c'est un ours. \n" +
  "D. Oui, Poutin est un être humain. \n";

const qFour =
  "???????Question 4??????? : Qui est le premier à avoir marcher sur la lune ? \n \n";
const rFour =
  "A. Neil Young \n" +
  "B. Neil Amstrong \n" +
  "C. Neil Astier \n" +
  "D. Bugs Bunny \n";

const qFive =
  "???????Question 5??????? : Quel est le symbole de la chouette ? \n \n";
const rFive =
  "A. La chouette est le symbole d'un code qui marche. Parce qu'un code qui marche, c'est...\n" +
  "B. Chuck Norris est bien plus chouette qu'une chouette. \n" +
  "C. Hedwig ??! \n" +
  "D. La chouette est le symbole de la connaissance, de la sagesse. \n";

// WIN || LOOSE

const w = " \n:::::::Bien joué camarade !:::::::: \n";
const l = "\n::::::::Mauvaise réponse.:::::::::";

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

console.log(qOne + rOne);
let choiceOne = prompt("Votre réponse : ");

if (choiceOne === "A") {
  console.log(w);
  score++;
} else {
  console.log(
    l + " Réponse : A. Tout le monde le sait qu'elle est plate... \n"
  );
}

console.log(qTwo + rTwo);
let choiceTwo = prompt("Votre réponse : ");

if (choiceTwo === "D") {
  console.log(w);
  score++;
} else {
  console.log(l + " Réponse : D. Non, mais avec un tubas oui.\n");
}

console.log(qThree + rThree);
let choiceThree = prompt("Votre réponse : ");

if (choiceThree === "C") {
  console.log(w);
  score++;
} else {
  console.log(
    l + " Réponse C. Vlad est le fils d'un ours. Donc non, c'est un ours. \n"
  );
}

console.log(qFour + rFour);
let choiceFour = prompt("Votre réponse : ");

if (choiceFour === "C") {
  console.log(w);
  score++;
} else {
  console.log(l + " Réponse D. Bugs Bunny. \n");
}
console.log(qFive + rFive);
let choiceFive = prompt("Votre réponse : ");

if (choiceFive === "B") {
  console.log(w);
  score++;
} else {
  console.log(
    l + " Réponse B. Chuck Norris est bien plus chouette qu'une chouette. \n"
  );
}

console.log(
  ` \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Bravo ou pas bravo, c'est subjectif... En tout cas voilà votre score : ${score} sur 5 questions.`
);
